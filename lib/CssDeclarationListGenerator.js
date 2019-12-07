const Generator = require('chance-generators/lib/Generator');
const _ = require('lodash');
const CssDeclarationGenerator = require('./CssDeclarationGenerator');
const { constant } = require('chance-generators');
const postcss = require('postcss');

function parseDeclarationList(declarationListStr) {
  return postcss.parse(`* {${declarationListStr}}`).nodes[0];
}

class CSSSimplifyingDeclarationListGenerator extends Generator {
  constructor(startingPoint, { min = 0 } = {}) {
    super('simplifyingDeclarationList', {
      startingPoint,
      min
    });
    this.ast =
      typeof startingPoint === 'string'
        ? parseDeclarationList(startingPoint)
        : startingPoint;
  }

  shrink(value) {
    const valueAst = postcss.parse(value);
    const { min } = this.options;
    if (valueAst.nodes.length > min) {
      return new CSSSimplifyingDeclarationListGenerator(valueAst, { min });
    } else {
      return constant(value);
    }
  }

  generate(chance) {
    const { min } = this.options;
    if (this.ast.nodes.length > min) {
      this.ast.removeChild(chance.pickone(this.ast.nodes));
    }
    return this.ast.toString();
  }
}

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

  shrink(lastValue) {
    const { min } = this.options;

    return new CSSSimplifyingDeclarationListGenerator(lastValue, { min });
  }
}

module.exports = CssDeclarationListGenerator;
