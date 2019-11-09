const Generator = require('chance-generators/lib/Generator');
const mdnData = require('mdn-data');
const _ = require('lodash');
const propertiesData = mdnData.css.properties;
const propertyNames = Object.keys(propertiesData);
const CssDeclarationGenerator = require('./CssDeclarationGenerator');

class CssDeclarationListGenerator extends Generator {
  constructor({ min = 1, max = 5 } = {}) {
    super(`declarationList`, { min, max });
  }

  generate(chance) {
    const count = chance.integer({
      min: this.options.min,
      max: this.options.max
    });
    const declarations = _.range(count).map(() =>
      new CssDeclarationGenerator().generate(chance)
    );
    return `${declarations.join('; ')};`;
  }
}

module.exports = CssDeclarationListGenerator;
