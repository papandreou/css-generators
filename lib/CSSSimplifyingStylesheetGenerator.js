const Generator = require('chance-generators/lib/Generator');
const { constant } = require('chance-generators');
const postcss = require('postcss');
const _ = require('lodash');

class CSSSimplifyingStylesheetGenerator extends Generator {
  constructor(startingPoint, { minStyleRules = 0, minAtRules = 0 } = {}) {
    super('simplifyingStylesheet', {
      startingPoint,
      minStyleRules,
      minAtRules
    });
    this.ast =
      typeof startingPoint === 'string'
        ? postcss.parse(startingPoint)
        : startingPoint;
  }

  shrink(value) {
    const valueAst = postcss.parse(value);
    const { minAtRules, minStyleRules } = this.options;
    const { atrule: numAtRules = 0, rule: numStyleRules = 0 } = _.countBy(
      valueAst.nodes,
      'type'
    );
    if (numAtRules > minAtRules || numStyleRules > minStyleRules) {
      return new CSSSimplifyingStylesheetGenerator(valueAst, {
        minAtRules,
        minStyleRules
      });
    } else {
      return constant(value);
    }
  }

  generate(chance) {
    const { minAtRules, minStyleRules } = this.options;
    const { atrule: atRules = [], rule: styleRules = [] } = _.groupBy(
      this.ast.nodes,
      'type'
    );
    let ruleToRemove;
    if (
      atRules.length > minAtRules &&
      (styleRules.length <= minStyleRules || chance.bool())
    ) {
      ruleToRemove = chance.pickone(atRules);
    } else if (styleRules.length > minStyleRules) {
      ruleToRemove = chance.pickone(styleRules);
    }
    if (ruleToRemove) {
      this.ast.removeChild(ruleToRemove);
    }
    return this.ast.toString();
  }
}

module.exports = CSSSimplifyingStylesheetGenerator;
