const Generator = require('chance-generators/lib/Generator');
const { constant } = require('chance-generators');
const postcss = require('postcss');

class CSSSimplifyingStylesheetGenerator extends Generator {
  constructor(startingPoint) {
    super(`simplifyingStylesheet`, {
      startingPoint
    });
  }

  shrink(value) {
    const ast = postcss.parse(value);
    if (ast.nodes.length <= 1) {
      return constant(value);
    } else {
      return new CSSSimplifyingStylesheetGenerator(value);
    }
  }

  generate(chance) {
    const ast = postcss.parse(this.options.startingPoint);
    ast.removeChild(
      ast.nodes[
        chance.integer({
          min: 0,
          max: ast.nodes.length - 1
        })
      ]
    );
    return ast.toString();
  }
}

module.exports = CSSSimplifyingStylesheetGenerator;
