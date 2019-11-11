const Generator = require('chance-generators/lib/Generator');
const mdnData = require('mdn-data');
const html5 = require('html-validate/elements/html5.json');
const _ = require('lodash');
const CssSyntaxGenerator = require('./CssSyntaxGenerator');

const elementNames = Object.keys(html5).filter(
  elementName => elementName !== '*'
);

const attributeNames = _.uniq(
  _.flatMap(Object.keys(html5), elementName =>
    Object.keys(html5[elementName].attributes || {})
  )
);

class CssSelectorGenerator extends Generator {
  constructor({ experimental = false } = {}) {
    super('selector');
    this.selectorInfos = Object.keys(mdnData.css.selectors).map(name => ({
      name,
      ...mdnData.css.selectors[name]
    }));

    if (!experimental) {
      this.selectorInfos = this.selectorInfos.filter(
        ({ status }) => status === 'standard'
      );
    }
  }

  generate(chance) {
    const selectorInfo = chance.pickone(this.selectorInfos);
    let syntax = selectorInfo.syntax;
    if (syntax === 'element') {
      return chance.pickone(elementNames);
    } else if (syntax === '#id') {
      return `#${chance.word()}`;
    } else if (syntax === '.class') {
      return `.${chance.word()}`;
    } else if (syntax === '[attr=value]') {
      return `[${chance.pickone(attributeNames)}=${chance.word()}]`;
    } else if (syntax === '*') {
      return syntax;
    } else {
      // Use the first syntax in case of eg. "/* CSS3 syntax */\n::first-letter\n\n/* CSS2 syntax */\n:first-letter"
      syntax = syntax.replace(/^\/\* [^*]*\*\/\n|\n\n[\s\S]*$/g, '');
      if (syntax.includes('A') && syntax.includes('B')) {
        return syntax.replace(/[AB]/g, () => this.generate(chance));
      } else {
        return new CssSyntaxGenerator(syntax).generate(chance);
      }
    }
  }
}

module.exports = CssSelectorGenerator;
