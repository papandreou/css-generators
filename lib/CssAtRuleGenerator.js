const Generator = require('chance-generators/lib/Generator');
const mdnData = require('mdn-data');
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
    return atRulesData[name].syntax
      .replace(/;/g, " ';' ")
      .replace(/"/g, ` '"' `)
      .split(/([{}])/)
      .map(fragment =>
        /^(?:[{}]?)$/.test(fragment)
          ? fragment
          : new CssSyntaxGenerator(fragment, {
              descriptors: atRulesData[name].descriptors
            }).generate(chance);
      })
      .join('')
      .replace(/" (.*) "/, '"$1"');
  }
}

module.exports = CssAtRuleGenerator;
