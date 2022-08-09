const Generator = require('chance-generators/lib/Generator');
const mdnData = require('mdn-data');
const atRulesData = mdnData.css.atRules;
const atRuleTypes = Object.keys(atRulesData);
const standardAtRuleTypes = atRuleTypes.filter(
  (atRuleType) => atRulesData[atRuleType].status === 'standard'
);
const CssSyntaxGenerator = require('./CssSyntaxGenerator');

function parseType(type) {
  return type.replace(/^@?/, '@');
}

class CssAtRuleGenerator extends Generator {
  constructor({ type, experimental = false } = {}) {
    super('atRule', { type, experimental });
  }

  generate(chance) {
    const type = this.options.type
      ? parseType(
          Array.isArray(this.options.type)
            ? chance.pickone(this.options.type)
            : this.options.type
        )
      : chance.pickone(
          this.options.experimental ? atRuleTypes : standardAtRuleTypes
        );

    return new CssSyntaxGenerator(atRulesData[type].syntax, {
      descriptors: atRulesData[type].descriptors,
    }).generate(chance);
  }
}

module.exports = CssAtRuleGenerator;
