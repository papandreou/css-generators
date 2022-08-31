const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssDeclarationListGenerator = require('../lib/CssDeclarationListGenerator');

describe('CssDeclarationListGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS declaration list', () => {
    expect(new CssDeclarationListGenerator().take(10)).toEqualSnapshot([
      'scroll-margin-block: -633.1305rem 559.382px; mask-repeat: repeat-y;',
      'background-clip: content-box;',
      'border-image-outset: -8636381890871296; background-blend-mode: exclusion; transform: none; border-inline-start-color: lch(-8879903957057536 -3760881468964864 none);',
      'backface-visibility: visible;',
      'border-top-right-radius: 236.772em; font-size-adjust: ch-width from-font;',
      'overflow-clip-margin: content-box; transform-box: view-box; scroll-margin-inline: -390.7725cap; border-block-end-style: dotted;',
      'border-bottom-right-radius: -931.223cm 26%; border-inline-start-color: hsla(-630.2911deg , 85% , 45% , 60%); padding-inline-start: 140.888em; list-style: none;',
      'clip: auto; mask-image: url(fefab); word-break: break-all; font-variant: normal;',
      'all: revert-layer;',
      'padding-block: 61% -283.0686Q; border-bottom-color: currentcolor; grid-template-areas: none; background-image: none;',
    ]);
  });

  describe('when shrinking', function () {
    it('should shrink', function () {
      const generator = new CssDeclarationListGenerator();
      expect(generator).toShrinkTowards('mask-repeat: repeat-y;');
    });

    it('should honor the min setting of the original generator', function () {
      const generator = new CssDeclarationListGenerator({
        min: 2,
      });
      expect(generator).toShrinkTowards(
        'scroll-margin-block: -633.1305rem 559.382px; border-block-end-width: thick;'
      );
    });
  });
});
