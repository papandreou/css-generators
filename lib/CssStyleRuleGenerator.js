const Generator = require('chance-generators/lib/Generator');
const CssDeclarationListGenerator = require('./CssDeclarationListGenerator');
const CssSelectorGenerator = require('./CssSelectorGenerator');
const postcss = require('postcss');

class CssStyleRuleGenerator extends Generator {
  constructor({ experimental = false, declarationList = {} } = {}) {
    super('styleRule', { experimental, declarationList });
  }

  generate(chance) {
    const { experimental, declarationList } = this.options;
    const selector = new CssSelectorGenerator({ experimental }).generate(
      chance
    );
    const declarationListGenerator = new CssDeclarationListGenerator({
      experimental,
      ...declarationList,
    });
    return `${selector} { ${declarationListGenerator.generate(chance)} }`;
  }

  shrink(value) {
    const valueAst = postcss.parse(value);
    const { selector, nodes } = valueAst.nodes[0];
    const { experimental, declarationList } = this.options;
    return new CssDeclarationListGenerator({
      experimental,
      ...declarationList,
    })
      .shrink(nodes.map((node) => `${node.toString()};`).join(' '))
      .map((value) => {
        return `${selector} { ${value} }`;
      });
  }
}

module.exports = CssStyleRuleGenerator;
