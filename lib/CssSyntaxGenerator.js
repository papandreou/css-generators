const Generator = require('chance-generators/lib/Generator');
const cssSyntaxParser = require('css-syntax-parser').default;
const _ = require('lodash');

class CssSyntaxGenerator extends Generator {
  constructor(nodeOrSyntax, { descriptors = {} } = {}) {
    super('syntax', {
      descriptors
    });
    if (typeof nodeOrSyntax === 'string') {
      const matchAtRuleSyntax = nodeOrSyntax.match(
        /^([^\n]+) \{\s*([\s\S]*?)\s*\}$/
      );
      if (matchAtRuleSyntax) {
        [, this.atRuleStart, nodeOrSyntax] = matchAtRuleSyntax;
      }

      nodeOrSyntax = nodeOrSyntax
        .replace(/([;"])/g, " '$1' ")
        .replace(/: /g, " ':' ");

      this.node = cssSyntaxParser(nodeOrSyntax);
      if (!this.node) {
        throw new Error(`css-syntax-parser could not parse: ${nodeOrSyntax}`);
      }
    } else {
      this.node = nodeOrSyntax;
    }
  }

  // Wrap all _generate calls to compensate for https://github.com/zanomate/css-syntax-parser/issues/1
  generate(chance) {
    const fragments = [];
    if (this.atRuleStart) {
      fragments.push(
        new CssSyntaxGenerator(this.atRuleStart).generate(chance),
        ' {\n  '
      );
    }
    fragments.push(
      this._generate(chance)
        .replace(/" (.*) "/g, '"$1"')
        .replace(/ : /g, ':')
    );
    if (this.atRuleStart) {
      fragments.push('\n}');
    }
    return fragments.join('');
  }

  _generate(chance) {
    const CssNamedSyntaxGenerator = require('./CssNamedSyntaxGenerator');
    const {
      node,
      options: { descriptors }
    } = this;
    if (node.multiplier === '?' && chance.bool()) {
      return '';
    }
    switch (node.type) {
      case 'literal':
      case 'keyword':
      case 'string':
        return node._value;
      case 'brackets':
        if (node.multiplier === '#') {
          return _.range(chance.integer({ min: 1, max: 5 }))
            .map(i =>
              new CssSyntaxGenerator(node.content, { descriptors }).generate(
                chance
              )
            )
            .join(', ');
        } else if (node.multiplier === '!') {
          let value;
          do {
            value = new CssSyntaxGenerator(node.content, {
              descriptors
            }).generate(chance);
          } while (value.trim() === '');
          return value;
        } else {
          return new CssSyntaxGenerator(node.content, { descriptors }).generate(
            chance
          );
        }
      case 'data-type':
        if (node.nonTerminal) {
          const CssDeclarationValueGenerator = require('./CssDeclarationValueGenerator');
          return new CssDeclarationValueGenerator({
            propertyName: node.name
          }).generate(chance);
        } else if (descriptors[node.name]) {
          return new CssSyntaxGenerator(
            descriptors[node.name].syntax,
            {}
          ).generate(chance);
        } else {
          return new CssNamedSyntaxGenerator(node.name).generate(chance);
        }
      case 'composed':
        if (node.combinator === '||') {
          return chance
            .pickset(
              node.children,
              chance.integer({ min: 1, max: node.children.length })
            )
            .map(child =>
              new CssSyntaxGenerator(child, { descriptors }).generate(chance)
            )
            .join(' ');
        } else if (node.combinator === '&&') {
          return chance
            .shuffle(node.children)
            .map(child =>
              new CssSyntaxGenerator(child, { descriptors }).generate(chance)
            )
            .join(' ');
        } else if (node.combinator === '|') {
          return new CssSyntaxGenerator(chance.pickone(node.children), {
            descriptors
          }).generate(chance);
        } else if (node.combinator === ' ') {
          return node.children
            .map(child =>
              new CssSyntaxGenerator(child, { descriptors }).generate(chance)
            )
            .join(' ');
        }
        break;
      case 'method':
        if (node.params) {
          return `${node.name}(${new CssSyntaxGenerator(node.params, {
            descriptors
          }).generate(chance)})`;
        } else {
          return `${node.name}()`;
        }
    }
    throw new Error(
      `Don't know how to generate ${JSON.stringify(node, undefined, '  ')}`
    );
  }
}

module.exports = CssSyntaxGenerator;
