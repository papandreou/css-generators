const Generator = require('chance-generators/lib/Generator');
const _ = require('lodash');
const CssStyleRuleGenerator = require('./CssStyleRuleGenerator');
const CssAtRuleGenerator = require('./CssAtRuleGenerator');
const { constant } = require('chance-generators');
const postcss = require('postcss');

class CssSimplifyingStylesheetGenerator extends Generator {
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
    const { atrule: atRules = [], rule: styleRules = [] } = _.groupBy(
      this.ast.nodes,
      'type'
    );
    if (
      atRules.length > minAtRules ||
      styleRules.length > minStyleRules ||
      styleRules.some(styleRule => styleRule.nodes.length > 1)
    ) {
      return new CssSimplifyingStylesheetGenerator(valueAst, {
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
    if (styleRules.length > 0 && chance.bool()) {
      const index = chance.integer({ min: 0, max: styleRules.length - 1 });
      const originalStyleRule = styleRules[index];
      const originalStyleRuleStr = originalStyleRule.toString();
      const shrunkStyleRuleStr = new CssStyleRuleGenerator()
        .shrink(originalStyleRuleStr)
        .take(1)[0];
      if (shrunkStyleRuleStr !== originalStyleRuleStr) {
        originalStyleRule.replaceWith(shrunkStyleRuleStr);
        return this.ast.toString();
      }
    }
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

class CssStylesheetGenerator extends Generator {
  constructor({
    minAtRules = 0,
    maxAtRules = 3,
    minStyleRules = 1,
    maxStyleRules = 20,
    experimental = false
  } = {}) {
    super('stylesheet', {
      minAtRules,
      maxAtRules,
      minStyleRules,
      maxStyleRules,
      experimental
    });
  }

  generate(chance) {
    const {
      minAtRules,
      maxAtRules,
      minStyleRules,
      maxStyleRules,
      experimental
    } = this.options;

    const atRuleCount = chance.integer({
      min: minAtRules,
      max: maxAtRules
    });
    const styleRuleCount = chance.integer({
      min: minStyleRules,
      max: maxStyleRules
    });
    const rules = [
      ..._.range(atRuleCount).map(() =>
        new CssAtRuleGenerator({
          experimental,
          type: ['@font-face', '@charset', '@keyframes']
        }).generate(chance)
      ),
      ..._.range(styleRuleCount).map(() =>
        new CssStyleRuleGenerator({ experimental }).generate(chance)
      )
    ];
    return `${rules.join('\n')}\n`;
  }

  shrink(lastValue) {
    const { minAtRules, minStyleRules } = this.options;

    return new CssSimplifyingStylesheetGenerator(lastValue, {
      minAtRules,
      minStyleRules
    });
  }
}

module.exports = CssStylesheetGenerator;
