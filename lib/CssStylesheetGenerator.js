const Generator = require('chance-generators/lib/Generator');
const { producer, integer } = require('chance-generators');
const _ = require('lodash');
const CssStyleRuleGenerator = require('./CssStyleRuleGenerator');
const CssAtRuleGenerator = require('./CssAtRuleGenerator');
const postcss = require('postcss');

class CssStylesheetGenerator extends Generator {
  constructor({
    minAtRules = 0,
    maxAtRules = 3,
    minStyleRules = 1,
    maxStyleRules = 20,
    experimental = false
  } = {}) {
    super(`stylesheet`, {
      minAtRules,
      maxAtRules,
      minStyleRules,
      maxStyleRules,
      experimental
    });
  }

  generate(chance) {
    const atRuleCount = chance.integer({
      min: this.options.minAtRules,
      max: this.options.maxAtRules
    });
    const styleRuleCount = chance.integer({
      min: this.options.minStyleRules,
      max: this.options.maxStyleRules
    });
    const rules = [
      ..._.range(atRuleCount).map(() =>
        new CssAtRuleGenerator({
          experimental: this.experimental,
          type: ['@font-face', '@charset', '@keyframes']
        }).generate(chance)
      ),
      ..._.range(styleRuleCount).map(() =>
        new CssStyleRuleGenerator({ experimental: this.experimental }).generate(
          chance
        )
      )
    ];
    return `${rules.join('\n')}\n`;
  }

  shrink(lastValue) {
    return producer((previous, context, chance) => {
      console.log('foo');
      const ast = postcss.parse(previous);
      const numRulesToRemove = integer({ min: 1, max: ast.nodes.length });
      for (let i = 0; i < numRulesToRemove; i += 1) {
        const index = chance.integer({
          min: 0,
          max: ast.nodes.length - 1
        });
        ast.removeChild(ast.nodes[index]);
      }
      return ast.toString();
    }, lastValue);
  }
}

module.exports = CssStylesheetGenerator;
