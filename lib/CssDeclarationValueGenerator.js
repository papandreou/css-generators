const Generator = require('chance-generators/lib/Generator');
const mdnData = require('mdn-data');
const _ = require('lodash');
const propertiesData = mdnData.css.properties;
const propertyNames = Object.keys(propertiesData);
const propertyNamesWithoutCustomProperty = _.without(propertyNames, '--*');
const CssSyntaxGenerator = require('./CssSyntaxGenerator');

class CssDeclarationValueGenerator extends Generator {
  constructor(propertyName) {
    super('declarationValue', { propertyName });
  }

  generate(chance) {
    const propertyName =
      this.options.propertyName ||
      chance.pickone(propertyNamesWithoutCustomProperty);
    let syntax = propertiesData[propertyName].syntax;
    // Handle references to other declaration syntaxes, eg. <'border-style'>:
    syntax = syntax.replace(
      /<'([\w-]+)'>/g,
      ($0, ref) => propertiesData[ref].syntax
    );
    return new CssSyntaxGenerator(syntax).generate(chance);
  }
}

module.exports = CssDeclarationValueGenerator;
