const Generator = require('chance-generators/lib/Generator');
const mdnData = require('mdn-data-papandreou');
const _ = require('lodash');
const characterSets = require('character-sets').toArray();

// Avoid the <general-enclosed> option allowed by the <media-in-parens> spec.
// The spec (https://www.w3.org/TR/mediaqueries-4/#mq-syntax) says that:
// When parsing the <media-in-parens> production, the <general-enclosed> branch
// must only be chosen if the input does not match either of the preceding branches.
// <general-enclosed> exists to allow for future expansion of the grammar in a reasonably compatible way.
const mediaInParens = mdnData.css.syntaxes['media-in-parens'];
mediaInParens.syntax = mediaInParens.syntax.replace(
  / \| <general-enclosed>$/,
  ''
);

const unitData = mdnData.css.units;
const unitsByGroup = {};
const units = [];
for (const unit of Object.keys(unitData)) {
  units.push(unit);
  for (const group of unitData[unit].groups) {
    (unitsByGroup[group] = unitsByGroup[group] || []).push(unit);
  }
}
const CssSyntaxGenerator = require('./CssSyntaxGenerator');

class CssNamedSyntaxGenerator extends Generator {
  constructor(name) {
    let min, max;
    // Avoid failing on new CssNamedSyntaxGenerator() which would break chance-generators'
    // createGeneratorFacade function
    if (typeof name === 'string') {
      // https://drafts.csswg.org/css-values-3/#numeric-ranges
      const matchRangeSyntax = name.match(/^(\S+) \[([^\]-]+),([^\]]+)\]$/);
      if (matchRangeSyntax) {
        name = matchRangeSyntax[1];
        min = parseFloat(matchRangeSyntax[2]);
        max = parseFloat(matchRangeSyntax[3]);
      }
    }
    super(name);
    this.name = name;
    this.min = min;
    this.max = max;
  }

  generate(chance) {
    if (
      this.name === 'ident-token' ||
      this.name === 'ident' ||
      this.name === 'custom-ident'
    ) {
      return chance.word(); // FIXME: Find out what these actually mean
    } else if (this.name === 'function-token') {
      // https://drafts.csswg.org/css-syntax-3/#function-token-diagram
      return `${new CssNamedSyntaxGenerator('ident-token').generate(chance)} (`;
    } else if (this.name === 'number') {
      return String(chance.integer({ min: this.min, max: this.max }));
    } else if (this.name === 'zero') {
      return '0';
    } else if (this.name === 'string' || this.name === 'string-token') {
      return `'${chance.word()}'`;
    } else if (this.name === 'negative-symbol') {
      // https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/negative
      if (chance.bool()) {
        return `'${chance.word()}'`;
      } else {
        return `'${chance.word()}' '${chance.word()}'`;
      }
    } else if (this.name === 'url') {
      return `url(${chance.word()})`; // FIXME: Make this controllable
    } else if (this.name === 'hash-token') {
      return `#${chance.word()}`;
    } else if (this.name === 'charset') {
      return chance.pickone(characterSets);
    } else if (this.name === 'counter-symbols') {
      // FIXME: Be more creative
      return 'Ⓐ Ⓑ Ⓒ';
    } else if (this.name === 'integer') {
      return `${chance.integer({ min: -100, max: 100 })}%`;
    } else if (this.name === 'positive-integer') {
      return `${chance.integer({ min: 1, max: 100 })}%`;
    } else if (this.name === 'percentage') {
      return `${chance.integer({ min: 0, max: 100 })}%`;
    } else if (this.name === 'resolution') {
      return `${chance.floating({ min: 0, max: 1000 })}${chance.pickone(
        unitsByGroup['CSS Resolutions']
      )}`;
    } else if (this.name === 'ratio') {
      return `${chance.integer({ min: 1 })}/${chance.integer({ min: 1 })}`;
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
        unitsByGroup['CSS Lengths']
      )}`;
    } else if (this.name === 'time') {
      return `${chance.floating({ min: -1000, max: 1000 })}${chance.pickone(
        unitsByGroup['CSS Times']
      )}`;
    } else if (this.name === 'flex') {
      return `${chance.floating({ min: 0, max: 1000 })}${chance.pickone(
        unitsByGroup['CSS Flexible Lengths']
      )}`;
    } else if (this.name === 'angle') {
      return `${chance.floating({ min: -1000, max: 1000 })}${chance.pickone(
        unitsByGroup['CSS Angles']
      )}`;
    } else if (this.name === 'dimension') {
      return `${chance.floating({ min: -1000, max: 1000 })}${chance.pickone(
        units
      )}`;
    } else if (this.name === 'hex-color') {
      return `#${chance
        .integer({ min: 0, max: 0xffffff })
        .toString(16)
        .padStart(6, '0')}`;
    } else if (this.name === 'an-plus-b') {
      return `${chance.integer({ min: 1, max: 10 })}n+${chance.integer({
        min: 1,
        max: 10,
      })}`;
    } else if (this.name === 'language-code') {
      return chance.pickone(require('iso-639-1').getAllCodes());
    } else if (this.name === 'counter-system') {
      return chance.pickone([
        'cyclic',
        'numeric',
        'alphabetic',
        'symbolic',
        'additive',
        'fixed',
      ]);
    } else if (this.name === 'negative-symbol') {
      return chance.pickone([
        'cyclic',
        'numeric',
        'alphabetic',
        'symbolic',
        'additive',
        'fixed',
      ]);
    } else if (this.name === 'unicode-range') {
      const codepoints = [chance.integer({ min: 0, max: 0xffff })];
      if (codepoints[0] < 0xffff && chance.bool()) {
        // U+1234-4567
        codepoints.push(
          chance.integer({ min: codepoints[0] + 1, max: 0xffff })
        );
      } else if (chance.bool() && codepoints[0] >= 16) {
        // U+12??
        const hexStr = codepoints[0].toString(16);
        return `U+${hexStr
          .slice(0, chance.integer({ min: 1, max: hexStr.length - 1 }))
          .padEnd(hexStr.length, '?')}`;
      }
      return `U+${codepoints
        .map((codepoint) =>
          codepoint
            .toString(16)
            .padStart(chance.integer({ min: 1, max: 4 }), '0')
        )
        .join('-')}`;
    } else if (this.name === 'declaration') {
      const CssDeclarationGenerator = require('./CssDeclarationGenerator');
      return new CssDeclarationGenerator().generate(chance);
    } else if (this.name === 'declaration-value' || this.name === 'any-value') {
      const CssDeclarationValueGenerator = require('./CssDeclarationValueGenerator');
      return new CssDeclarationValueGenerator().generate(chance);
    } else if (this.name === 'declaration-list') {
      const CssDeclarationListGenerator = require('./CssDeclarationListGenerator');
      return new CssDeclarationListGenerator().generate(chance);
    } else if (this.name === 'selector') {
      const CssSelectorGenerator = require('./CssSelectorGenerator');
      return new CssSelectorGenerator().generate(chance);
    } else if (this.name === 'group-rule-body') {
      const CssStyleRuleGenerator = require('./CssStyleRuleGenerator');
      const rules = _.range(
        chance.integer({
          min: 1,
          max: 20,
        })
      ).map(() =>
        new CssStyleRuleGenerator({
          experimental: this.experimental,
        }).generate(chance)
      );
      return `${rules.join('\n')}\n`;
    } else if (this.name === 'path()') {
      const SvgPathGenerator = require('./SvgPathGenerator');
      return new SvgPathGenerator().generate(chance);
    } else if (this.name === 'name-repeat') {
      // Seems like an accidental omission from https://github.com/mdn/data/blob/master/css/syntaxes.json
      return new CssSyntaxGenerator(
        'repeat( [ <positive-integer> | auto-fill ], <line-names>+)'
      ).generate(chance);
    } else {
      const syntaxObj =
        mdnData.css.syntaxes[this.name] || mdnData.css.properties[this.name];
      if (!syntaxObj) {
        throw new Error(
          `Syntax ${JSON.stringify(this.name)} not found in mdn-data-papandreou`
        );
      }
      return new CssSyntaxGenerator(syntaxObj.syntax).generate(chance);
    }
  }
}

module.exports = CssNamedSyntaxGenerator;
