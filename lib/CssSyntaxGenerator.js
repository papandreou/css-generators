const Generator = require('chance-generators/lib/Generator');
const mdnData = require('mdn-data');
const cssSyntaxParser = require('css-syntax-parser').default;

const unitData = mdnData.css.units;
const angleUnits = Object.keys(unitData).filter(unit =>
  unitData[unit].groups.includes('CSS Angles')
);
const lengthUnits = Object.keys(unitData).filter(unit =>
  unitData[unit].groups.includes('CSS Lengths')
);

class CssSyntaxGenerator extends Generator {
  constructor(name) {
    super(name);
    this.name = name;
  }

  generateNode(node, chance) {
    switch (node.type) {
      case 'literal':
        return node._value;
      case 'keyword':
        return node._value;
      case 'string':
        return node._value;
      case 'brackets':
        return this.generateNode(node.content, chance);
      case 'data-type':
        return new CssSyntaxGenerator(node.name).generate(chance);
      case 'composed':
        if (node.combinator === '||') {
          return chance
            .pickset(
              node.children,
              chance.integer({ min: 1, max: node.children.length })
            )
            .map(child => this.generateNode(child, chance))
            .join(' ');
        } else if (node.combinator === '&&') {
          return chance
            .shuffle(node.children)
            .map(child => this.generateNode(child, chance))
            .join(' ');
        } else if (node.combinator === '|') {
          return this.generateNode(chance.pickone(node.children), chance);
        } else if (node.combinator === ' ') {
          return node.children
            .map(child => this.generateNode(child, chance))
            .join(' ');
        }
        break;
      case 'method':
        return `${node.name}(${this.generateNode(node.params, chance)})`;
    }
    throw new Error(
      `Don't know how to generate ${JSON.stringify(node, undefined, '  ')}`
    );
  }

  generate(chance) {
    if (this.name === 'ident-token') {
      return chance.word();
    } else if (this.name === 'number') {
      return String(chance.integer());
    } else if (this.name === 'percentage') {
      return `${chance.integer({ min: 0, max: 100 })}%`;
    } else if (this.name === 'length') {
      return `${chance.floating({ min: -1000, max: 1000 })}${chance.pickone(
        lengthUnits
      )}`;
    } else if (this.name === 'angle') {
      return `${chance.floating({ min: -1000, max: 1000 })}${chance.pickone(
        angleUnits
      )}`;
    } else if (this.name === 'hex-color') {
      return `#${chance
        .integer({ min: 0, max: 0xffffff })
        .toString(16)
        .padStart(6, '0')}`;
    } else {
      const syntaxObj = mdnData.css.syntaxes[this.name];
      if (!syntaxObj) {
        throw new Error(
          `Syntax ${JSON.stringify(this.name)} not found in mdn-data`
        );
      }

      return this.generateNode(cssSyntaxParser(syntaxObj.syntax), chance);
    }
  }
}

module.exports = CssSyntaxGenerator;
