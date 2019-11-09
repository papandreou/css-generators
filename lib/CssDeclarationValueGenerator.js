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
    return new CssSyntaxGenerator(propertiesData[propertyName].syntax).generate(
      chance
    );
  }
}

module.exports = CssDeclarationValueGenerator;
