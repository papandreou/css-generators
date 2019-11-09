const Generator = require('chance-generators/lib/Generator');
const mdnData = require('mdn-data');

const unitData = mdnData.css.units;
const angleUnits = Object.keys(unitData).filter(unit =>
  unitData[unit].groups.includes('CSS Angles')
);
const lengthUnits = Object.keys(unitData).filter(unit =>
  unitData[unit].groups.includes('CSS Lengths')
);
const timeUnits = Object.keys(unitData).filter(unit =>
  unitData[unit].groups.includes('CSS Times')
);
const flexUnits = Object.keys(unitData).filter(unit =>
  unitData[unit].groups.includes('CSS Flexible Lengths')
);
const resolutionUnits = Object.keys(unitData).filter(unit =>
  unitData[unit].groups.includes('CSS Resolutions')
);

const CssSyntaxGenerator = require('./CssSyntaxGenerator');

class CssNamedSyntaxGenerator extends Generator {
  constructor(name) {
    super(name);
    this.name = name;
  }

  generate(chance) {
    if (
      this.name === 'function-token' ||
      this.name === 'ident-token' ||
      this.name === 'ident' ||
      this.name === 'custom-ident'
    ) {
      return chance.word(); // FIXME: Find out what these actually mean
    } else if (this.name === 'number') {
      return String(chance.integer());
    } else if (this.name === 'string') {
      return `'${chance.word()}'`;
    } else if (this.name === 'url') {
      return `url(${chance.word()})`; // FIXME: Make this controllable
    } else if (this.name === 'hash-token') {
      return `#${chance.word()}`;
    } else if (this.name === 'integer') {
      return `${chance.integer({ min: -100, max: 100 })}%`;
    } else if (this.name === 'positive-integer') {
      return `${chance.integer({ min: 1, max: 100 })}%`;
    } else if (this.name === 'percentage') {
      return `${chance.integer({ min: 0, max: 100 })}%`;
    } else if (this.name === 'resolution') {
      return `${chance.floating({ min: 0, max: 1000 })}${chance.pickone(
        resolutionUnits
      )}`;
    } else if (
      this.name === 'length' ||
      this.name === 'x' ||
      this.name === 'y' ||
      this.name === 'top' ||
      this.name === 'bottom' ||
      this.name === 'left' ||
      this.name === 'right'
    ) {
      return `${chance.floating({ min: -1000, max: 1000 })}${chance.pickone(
        lengthUnits
      )}`;
    } else if (this.name === 'time') {
      return `${chance.floating({ min: -1000, max: 1000 })}${chance.pickone(
        timeUnits
      )}`;
    } else if (this.name === 'flex') {
      return `${chance.floating({ min: 0, max: 1000 })}${chance.pickone(
        flexUnits
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
    } else if (this.name === 'language-code') {
      return chance.pickone(require('iso-639-1').getAllCodes());
    } else if (this.name === 'declaration') {
      const CssDeclarationGenerator = require('./CssDeclarationGenerator');
      return new CssDeclarationGenerator().generate(chance);
    } else if (this.name === 'declaration-value' || this.name === 'any-value') {
      const CssDeclarationValueGenerator = require('./CssDeclarationValueGenerator');
      return new CssDeclarationValueGenerator().generate(chance);
    } else if (this.name === 'declaration-list') {
      const CssDeclarationListGenerator = require('./CssDeclarationListGenerator');
      return new CssDeclarationListGenerator().generate(chance);
    } else if (this.name === 'path()') {
      const SvgPathGenerator = require('./SvgPathGenerator');
      return new SvgPathGenerator().generate(chance);
    } else {
      const syntaxObj = mdnData.css.syntaxes[this.name];
      if (!syntaxObj) {
        throw new Error(
          `Syntax ${JSON.stringify(this.name)} not found in mdn-data`
        );
      }
      return new CssSyntaxGenerator(syntaxObj.syntax).generate(chance);
    }
  }
}

module.exports = CssNamedSyntaxGenerator;
