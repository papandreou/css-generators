const RangeGenerator = require('./RangeGenerator');
const { InvalidSyntaxError } = require('./utils');
const _ = require('lodash');

function generateLiteral(chance) {
  const { node } = this;
  return new RangeGenerator(node._value, node.range).generate(chance);
}

function generateBrackets(chance) {
  const CssSyntaxGenerator = this.constructor;
  const {
    node,
    options: { descriptors },
  } = this;

  if (node.multiplier === '#') {
    return _.range(chance.integer({ min: 1, max: 5 }))
      .map((i) =>
        new CssSyntaxGenerator(node.content, { descriptors }).generate(chance)
      )
      .join(', ');
  } else if (node.multiplier === '!') {
    let value;
    do {
      value = new CssSyntaxGenerator(node.content, {
        descriptors,
      }).generate(chance);
    } while (value.trim() === '');
    return value;
  } else {
    return new CssSyntaxGenerator(node.content, { descriptors }).generate(
      chance
    );
  }
}

function generateDataType(chance) {
  const CssSyntaxGenerator = this.constructor;
  const {
    node,
    options: { descriptors },
  } = this;
  const CssNamedSyntaxGenerator = require('./CssNamedSyntaxGenerator');

  let dataTypeGenerator;
  if (node.nonTerminal) {
    const CssDeclarationValueGenerator = require('./CssDeclarationValueGenerator');
    dataTypeGenerator = new CssDeclarationValueGenerator({
      propertyName: node.name,
    });
  } else if (descriptors[node.name]) {
    dataTypeGenerator = new CssSyntaxGenerator(
      descriptors[node.name].syntax,
      {}
    );
  } else {
    dataTypeGenerator = new CssNamedSyntaxGenerator(node.name);
  }
  return new RangeGenerator(dataTypeGenerator, node.range).generate(chance);
}

function generateComposed(chance) {
  const CssSyntaxGenerator = this.constructor;
  const {
    node,
    options: { descriptors },
  } = this;

  if (node.combinator === '||') {
    return chance
      .pickset(
        node.children,
        chance.integer({ min: 1, max: node.children.length })
      )
      .map((child) =>
        new CssSyntaxGenerator(child, { descriptors }).generate(chance)
      )
      .join(' ');
  } else if (node.combinator === '&&') {
    return chance
      .shuffle(node.children)
      .map((child) =>
        new CssSyntaxGenerator(child, { descriptors }).generate(chance)
      )
      .join(' ');
  } else if (node.combinator === '|') {
    return new CssSyntaxGenerator(chance.pickone(node.children), {
      descriptors,
    }).generate(chance);
  } else if (node.combinator === ' ') {
    const tokens = [];
    // Generate the children, but omit commas that don't satisfy
    // the criteria in https://drafts.csswg.org/css-values-3/#component-types
    let state = 'INITIAL';
    for (const child of node.children) {
      if (child.type === 'literal' && child._value === ',') {
        if (state === 'AFTER_CONTENT') {
          state = 'MAYBE_COMMA';
        }
      } else {
        const token = new CssSyntaxGenerator(child, {
          descriptors,
        }).generate(chance);
        if (token.trim() !== '') {
          if (state === 'MAYBE_COMMA') {
            tokens.push(',');
          }
          tokens.push(token);
          state = 'AFTER_CONTENT';
        }
      }
    }

    return tokens.join(' ');
  }

  throw new InvalidSyntaxError(node);
}

function generateMethod(chance) {
  const CssSyntaxGenerator = this.constructor;
  const {
    node,
    options: { descriptors },
  } = this;

  if (node.params) {
    return `${node.name}(${new CssSyntaxGenerator(node.params, {
      descriptors,
    }).generate(chance)})`;
  } else {
    return `${node.name}()`;
  }
}

module.exports = {
  generateLiteral,
  generateKeyword: generateLiteral,
  generateString: generateLiteral,
  generateBrackets,
  generateDataType,
  generateComposed,
  generateMethod,
};
