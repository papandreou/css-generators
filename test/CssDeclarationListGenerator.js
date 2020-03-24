const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssDeclarationListGenerator = require('../lib/CssDeclarationListGenerator');

describe('CssDeclarationListGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS declaration list', () => {
    expect(new CssDeclarationListGenerator().take(10)).toEqualSnapshot([
      'scroll-margin-block-start: 901.4287em; padding-right: 60%;',
      'border-inline: thin currentcolor; empty-cells: hide; border-image-outset: 2718165087813632;',
      'background-color: ThreeDDarkShadow;',
      'touch-action: auto; -webkit-line-clamp: none; word-wrap: normal; min-block-size: 223.3063pt; align-items: stretch;',
      'column-rule: none thin;',
      'font-feature-settings: normal; grid-template-rows: none; scrollbar-width: thin; border-radius: 28.4689vw / -907.0992vmax; max-block-size: max-content;',
      'grid-template-areas: none;',
      'transform-style: preserve-3d;',
      'mask-border: 3318847205539840 url(ebik) repeat luminance; outline-color: invert; contain: strict; list-style-image: url(gazziw); font-variant-alternates: swash(uhlog) annotation(sezsi) ornaments(ju) historical-forms stylistic(bu) character-variant(mahbu) styleset(wot);',
      'max-block-size: auto; text-transform: uppercase; opacity: 7475248958013440; shape-margin: 62%;',
    ]);
  });

  describe('when shrinking', function () {
    it('should shrink', function () {
      const generator = new CssDeclarationListGenerator();
      expect(generator).toShrinkTowards(
        'scroll-margin-block-start: 901.4287em;'
      );
    });

    it('should honor the min setting of the original generator', function () {
      const generator = new CssDeclarationListGenerator({
        min: 2,
      });
      expect(generator).toShrinkTowards(
        'scroll-margin-block-start: 901.4287em; mask-repeat: repeat-x;'
      );
    });
  });
});
