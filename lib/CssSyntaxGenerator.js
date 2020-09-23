const Generator = require('chance-generators/lib/Generator');
const cssSyntaxParser = require('css-syntax-parser').default;
const defaultGenerators = require('./defaultGenerators');
const { InvalidSyntaxError } = require('./utils');

class CssSyntaxGenerator extends Generator {
  constructor(nodeOrSyntax, { descriptors = {} } = {}) {
    super('syntax', {
      descriptors,
    });
    if (typeof nodeOrSyntax === 'string') {
      const matchAtRuleSyntax = nodeOrSyntax.match(
        /^([^\n]+) \{\s*([\s\S]*?)\s*\}$/
      );
      if (matchAtRuleSyntax) {
        [, this.atRuleStart, nodeOrSyntax] = matchAtRuleSyntax;
      }

      nodeOrSyntax = nodeOrSyntax
        .replace(/([;"])/g, " '$1' ")
        .replace(/: /g, " ':' ");

      this.node = cssSyntaxParser(nodeOrSyntax);
      if (!this.node) {
        throw new Error(`css-syntax-parser could not parse: ${nodeOrSyntax}`);
      }
    } else {
      this.node = nodeOrSyntax;
    }
  }

  static setGenerators(generators = {}) {
    CssSyntaxGenerator.generators = { ...defaultGenerators, ...generators };
  }

  generateLiteral(chance) {
    return CssSyntaxGenerator.generators.generateLiteral.bind(this)(chance);
  }

  generateKeyword(chance) {
    return CssSyntaxGenerator.generators.generateKeyword.bind(this)(chance);
  }

  generateString(chance) {
    return CssSyntaxGenerator.generators.generateString.bind(this)(chance);
  }

  generateBrackets(chance) {
    return CssSyntaxGenerator.generators.generateBrackets.bind(this)(chance);
  }

  generateDataType(chance) {
    return CssSyntaxGenerator.generators.generateDataType.bind(this)(chance);
  }

  generateComposed(chance) {
    return CssSyntaxGenerator.generators.generateComposed.bind(this)(chance);
  }

  generateMethod(chance) {
    return CssSyntaxGenerator.generators.generateMethod.bind(this)(chance);
  }

  // Wrap all _generate calls to compensate for https://github.com/zanomate/css-syntax-parser/issues/1
  generate(chance) {
    const fragments = [];
    if (this.atRuleStart) {
      fragments.push(
        new CssSyntaxGenerator(this.atRuleStart).generate(chance),
        ' {\n  '
      );
    }
    fragments.push(
      this._generate(chance)
        .replace(/" (.*) "/g, '"$1"')
        .replace(/ : /g, ':')
    );
    if (this.atRuleStart) {
      fragments.push('\n}');
    }
    return fragments.join('');
  }

  _generate(chance) {
    const { node } = this;

    if (node.multiplier === '?' && chance.bool()) {
      return '';
    }
    switch (node.type) {
      case 'literal':
        return this.generateLiteral(chance);
      case 'keyword':
        return this.generateKeyword(chance);
      case 'string':
        return this.generateString(chance);
      case 'brackets':
        return this.generateBrackets(chance);
      case 'data-type':
        return this.generateDataType(chance);
      case 'composed':
        return this.generateComposed(chance);
      case 'method':
        return this.generateMethod(chance);
      default:
        throw new InvalidSyntaxError(node);
    }
  }
}

CssSyntaxGenerator.setGenerators();

module.exports = CssSyntaxGenerator;
