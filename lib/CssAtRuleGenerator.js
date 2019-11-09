const Generator = require('chance-generators/lib/Generator');
const mdnData = require('mdn-data');
const _ = require('lodash');
const atRulesData = mdnData.css.atRules;
const atRuleNames = Object.keys(atRulesData);
const standardAtRuleNames = atRuleNames.filter(
  atRuleName => atRulesData[atRuleName].status === 'standard'
);
const CssSyntaxGenerator = require('./CssSyntaxGenerator');

class CssAtRuleGenerator extends Generator {
  constructor({ name, experimental = false } = {}) {
    super('declarationValue', { name, experimental });
  }

  generate(chance) {
    const name = this.options.name
      ? this.options.name.replace(/^@?/, '@')
      : chance.pickone(
          this.options.experimental ? atRuleNames : standardAtRuleNames
        );
    console.log('the syntax', atRulesData[name].syntax);
    return new CssSyntaxGenerator(atRulesData[name].syntax).generate(chance);
  }
}

module.exports = CssAtRuleGenerator;
