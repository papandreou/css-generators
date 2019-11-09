const Generator = require('chance-generators/lib/Generator');
const CssDeclarationListGenerator = require('./CssDeclarationListGenerator');
const CssSelectorGenerator = require('./CssSelectorGenerator');

class CssStyleRuleGenerator extends Generator {
  constructor({ experimental = false } = {}) {
    super(`styleRule`, { experimental });
  }

  generate(chance) {
    const experimental = this.options.experimental;
    const selector = new CssSelectorGenerator({ experimental }).generate(
      chance
    );
    const declarationList = new CssDeclarationListGenerator({
      experimental
    }).generate(chance);
    return `${selector} { ${declarationList} }`;
  }
}

module.exports = CssStyleRuleGenerator;
