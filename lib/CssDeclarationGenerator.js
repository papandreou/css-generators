const Generator = require('chance-generators/lib/Generator');
const mdnData = require('mdn-data');
const propertiesData = mdnData.css.properties;
const propertyNames = Object.keys(propertiesData);
const standardPropertyNames = propertyNames.filter(
  propertyName => propertiesData[propertyName].status === 'standard'
);
const CssDeclarationValueGenerator = require('./CssDeclarationValueGenerator');

class CssDeclarationGenerator extends Generator {
  constructor({ experimental = false } = {}) {
    super(`declaration`, { experimental });
  }

  generate(chance) {
    const propertyName = chance.pickone(
      this.options.experimental ? propertyNames : standardPropertyNames
    );
    return `${propertyName}: ${new CssDeclarationValueGenerator({
      propertyName
    }).generate(chance)}`;
  }
}

module.exports = CssDeclarationGenerator;
