const Generator = require('chance-generators/lib/Generator');
const mdnData = require('mdn-data');
const _ = require('lodash');
const propertiesData = mdnData.css.properties;
const propertyNames = Object.keys(propertiesData);
const CssDeclarationValueGenerator = require('./CssDeclarationValueGenerator');

class CssDeclarationGenerator extends Generator {
  constructor() {
    super(`declaration`);
  }

  generate(chance) {
    const propertyName = chance.pickone(propertyNames);
    return `${propertyName}: ${new CssDeclarationValueGenerator(
      propertyName
    ).generate(chance)}`;
  }
}

module.exports = CssDeclarationGenerator;
