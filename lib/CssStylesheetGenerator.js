const Generator = require('chance-generators/lib/Generator');
const _ = require('lodash');
const CssStyleRuleGenerator = require('./CssStyleRuleGenerator');

class CssStylesheetGenerator extends Generator {
  constructor({ min = 1, max = 5, experimental = false } = {}) {
    super(`declarationList`, { min, max, experimental });
  }

  generate(chance) {
    const count = chance.integer({
      min: this.options.min,
      max: this.options.max
    });
    const declarations = _.range(count).map(() =>
      new CssStyleRuleGenerator({ experimental: this.experimental }).generate(
        chance
      )
    );
    return `${declarations.join('\n')}\n`;
  }
}

module.exports = CssStylesheetGenerator;
