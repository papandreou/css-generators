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
      'touch-action: auto; -webkit-line-clamp: none; word-wrap: normal; min-block-size: auto; max-inline-size: max-content;',
      'grid-column: auto;',
      'max-inline-size: none; border-image: image-set(element(#taj) 514.2344x); mask-origin: fill-box;',
      'shape-image-threshold: 68%;',
      'grid-template-areas: none;',
      'transform-style: preserve-3d;',
      'mask-border: 3318847205539840 url(ebik) repeat luminance; outline-color: invert; contain: strict; list-style-image: url(gazziw); font-variant-alternates: swash(uhlog) annotation(sezsi) ornaments(ju) historical-forms stylistic(bu) character-variant(mahbu) styleset(wot);'
    ]);
  });

  describe('when shrinking', function() {
    it('should shrink', function() {
      const generator = new CssDeclarationListGenerator();
      expect(generator).toShrinkTowards(
        'scroll-margin-inline-start: 901.4287em;'
      );
    });

    it('should honor the min setting of the original generator', function() {
      const generator = new CssDeclarationListGenerator({
        min: 2
      });
      expect(generator).toShrinkTowards(
        'scroll-margin-inline-start: 901.4287em; perspective-origin: top -688.011cm left 732.3523mm;'
      );
    });
  });
});
