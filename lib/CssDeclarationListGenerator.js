const Generator = require('chance-generators/lib/Generator');
const _ = require('lodash');
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
