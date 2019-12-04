const Generator = require('chance-generators/lib/Generator');
const { constant } = require('chance-generators');
const postcss = require('postcss');

class CSSSimplifyingStylesheetGenerator extends Generator {
  constructor(startingPoint) {
    super(`simplifyingStylesheet`, { startingPoint });
    this.ast =
      typeof startingPoint === 'string'
        ? postcss.parse(startingPoint)
        : startingPoint;
  }

  shrink(value) {
    const valueAst = postcss.parse(value);
    if (valueAst.nodes.length <= 1) {
      return constant(value);
    } else {
      return new CSSSimplifyingStylesheetGenerator(valueAst);
    }
  }

  generate(chance) {
    this.ast.removeChild(
      this.ast.nodes[
        chance.integer({
          min: 0,
          max: this.ast.nodes.length - 1
        })
      ]
    );
    return this.ast.toString();
  }
}

module.exports = CSSSimplifyingStylesheetGenerator;
