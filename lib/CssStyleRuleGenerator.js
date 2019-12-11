const Generator = require('chance-generators/lib/Generator');
const CssDeclarationListGenerator = require('./CssDeclarationListGenerator');
const CssSelectorGenerator = require('./CssSelectorGenerator');
const postcss = require('postcss');

class CssStyleRuleGenerator extends Generator {
  constructor({
    experimental = false,
    minDeclarations,
    declarationList = {}
  } = {}) {
    super('styleRule', { experimental, minDeclarations, declarationList });
  }

  generate(chance) {
    const { experimental, minDeclarations, declarationList } = this.options;
    const selector = new CssSelectorGenerator({ experimental }).generate(
      chance
    );
    const declarationListGenerator = new CssDeclarationListGenerator({
      min: minDeclarations,
      experimental,
      ...declarationList
    });
    return `${selector} { ${declarationListGenerator.generate(chance)} }`;
  }

  shrink(value) {
    const valueAst = postcss.parse(value);
    const { selector, nodes } = valueAst.nodes[0];
    const { experimental, minDeclarations, declarationList } = this.options;
    return new CssDeclarationListGenerator({
      min: minDeclarations,
      experimental,
      ...declarationList
    })
      .shrink(nodes.map(node => `${node.toString()};`).join(' '))
      .map(value => {
        return `${selector} { ${value} }`;
      });
  }
}

module.exports = CssStyleRuleGenerator;
