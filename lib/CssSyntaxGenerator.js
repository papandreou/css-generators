const Generator = require('chance-generators/lib/Generator');
const cssSyntaxParser = require('css-syntax-parser').default;

class CssSyntaxGenerator extends Generator {
  constructor(nodeOrSyntax) {
    let node;
    if (typeof nodeOrSyntax === 'string') {
      node = cssSyntaxParser(nodeOrSyntax);
    } else {
      node = nodeOrSyntax;
    }
    super(`syntax`, {
      node
    });
  }

  generate(chance) {
    const CssNamedSyntaxGenerator = require('./CssNamedSyntaxGenerator');
    const { node } = this.options;
    switch (node.type) {
      case 'literal':
      case 'keyword':
      case 'string':
        return node._value;
      case 'brackets':
        return new CssSyntaxGenerator(node.content).generate(chance);
      case 'data-type':
        if (node.nonTerminal) {
          const CssDeclarationValueGenerator = require('./CssDeclarationValueGenerator');
          return new CssDeclarationValueGenerator(node.name).generate(chance);
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
            .map(child => new CssSyntaxGenerator(child).generate(chance))
            .join(' ');
        } else if (node.combinator === '&&') {
          return chance
            .shuffle(node.children)
            .map(child => new CssSyntaxGenerator(child).generate(chance))
            .join(' ');
        } else if (node.combinator === '|') {
          return new CssSyntaxGenerator(chance.pickone(node.children)).generate(
            chance
          );
        } else if (node.combinator === ' ') {
          return node.children
            .map(child => new CssSyntaxGenerator(child).generate(chance))
            .join(' ');
        }
        break;
      case 'method':
        if (node.params) {
          return `${node.name}(${new CssSyntaxGenerator(node.params).generate(
            chance
          )})`;
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
