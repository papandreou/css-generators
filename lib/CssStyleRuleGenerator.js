const Generator = require('chance-generators/lib/Generator');
const CssDeclarationListGenerator = require('./CssDeclarationListGenerator');
const CssSelectorGenerator = require('./CssSelectorGenerator');

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
}

module.exports = CssStyleRuleGenerator;
