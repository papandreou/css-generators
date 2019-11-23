const Generator = require('chance-generators/lib/Generator');
const cssSyntaxParser = require('css-syntax-parser').default;

class CssSyntaxGenerator extends Generator {
  constructor(nodeOrSyntax, { descriptors = {} } = {}) {
    let node;
    if (typeof nodeOrSyntax === 'string') {
      nodeOrSyntax = nodeOrSyntax
        .replace(/([;"])/g, " '$1' ")
        .replace(/ \{/g, " '{'")
        .replace(/ \}/g, " '}'")
        .replace(/: /g, " ':' ");
      node = cssSyntaxParser(nodeOrSyntax);
      if (!node) {
        throw new Error(`css-syntax-parser could not parse: ${nodeOrSyntax}`);
      }
    } else {
      node = nodeOrSyntax;
    }
    super('syntax', {
      node,
      descriptors
    });
  }

  // Wrap all _generate calls to compensate for https://github.com/zanomate/css-syntax-parser/issues/1
  generate(chance) {
    return this._generate(chance)
      .replace(/" (.*) "/g, '"$1"')
      .replace(/ : /g, ':');
  }

  _generate(chance) {
    const CssNamedSyntaxGenerator = require('./CssNamedSyntaxGenerator');
    const { node, descriptors } = this.options;
    switch (node.type) {
      case 'literal':
      case 'keyword':
      case 'string':
        return node._value;
      case 'brackets':
        return new CssSyntaxGenerator(node.content, { descriptors }).generate(
          chance
        );
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
