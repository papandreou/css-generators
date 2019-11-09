const Generator = require('chance-generators/lib/Generator');
const mdnData = require('mdn-data');
const _ = require('lodash');
const propertiesData = mdnData.css.properties;
const propertyNames = Object.keys(propertiesData);
const propertyNamesWithoutCustomProperty = _.without(propertyNames, '--*');
const CssSyntaxGenerator = require('./CssSyntaxGenerator');

class CssDeclarationGenerator extends Generator {
  constructor() {
    super(`declaration`);
  }

  generate(chance) {
    let propertyName = chance.pickone(propertyNames);
    let propertyData = propertiesData[propertyName];
    if (propertyName === '--*') {
      // Custom property
      propertyName = `--${chance.word()}`;
      // Handle <declaration-value> by picking the syntax of a random other property:
      propertyData =
        propertiesData[chance.pickone(propertyNamesWithoutCustomProperty)];
    } else {
      const matchRef = propertyData.syntax.match(/^<'(\w+)'>$/);
      if (matchRef) {
        propertyData = propertiesData[matchRef[1]];
      }
    }
    return `${propertyName}: ${new CssSyntaxGenerator(
      propertyData.syntax
    ).generate(chance)}`;
  }
}

module.exports = CssDeclarationGenerator;
