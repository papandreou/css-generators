const Generator = require('chance-generators/lib/Generator');
const CssDeclarationListGenerator = require('./CssDeclarationListGenerator');
const CssSelectorGenerator = require('./CssSelectorGenerator');
const postcss = require('postcss');

class CssStyleRuleGenerator extends Generator {
  constructor({ experimental = false, minDeclarations } = {}) {
    super('styleRule', { experimental, minDeclarations });
  }

  generate(chance) {
    const { experimental, minDeclarations } = this.options;
    const selector = new CssSelectorGenerator({ experimental }).generate(
      chance
    );
    const declarationList = new CssDeclarationListGenerator({
      min: minDeclarations,
      experimental
    }).generate(chance);
    return `${selector} { ${declarationList} }`;
  }

  shrink(value) {
    const valueAst = postcss.parse(value);
    const { selector, nodes } = valueAst.nodes[0];
    const { experimental, minDeclarations } = this.options;
    return new CssDeclarationListGenerator({
      min: minDeclarations,
      experimental
    })
      .shrink(nodes.map(node => `${node.toString()};`).join(' '))
      .map(value => {
        return `${selector} { ${value} }`;
      });
  }
}

module.exports = CssStyleRuleGenerator;
