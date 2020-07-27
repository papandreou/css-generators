const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssDeclarationListGenerator = require('../lib/CssDeclarationListGenerator');

describe('CssDeclarationListGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS declaration list', () => {
    expect(new CssDeclarationListGenerator().take(10)).toEqualSnapshot([
      'scroll-margin-block-start: -633.1305rem; scale: -6196617325576192 -975790292336640;',
      'border-block-start: groove;',
      'opacity: 3999174336970752; scroll-padding-bottom: 984.4232em; min-block-size: min-content; align-items: stretch;',
      'list-style-position: outside; border-image: none;',
      'border-block-end: double medium rgb(8388081040228352 1140099123249152 5555592747810816 -2064152721883136 -3519765393965056); border-block-end-width: 366.5271cm; max-height: 3%;',
      'text-indent: hanging -584.1167px each-line;',
      'unicode-bidi: plaintext;',
      'transform: none; text-transform: lowercase; text-rendering: optimizeSpeed;',
      'border-left-style: none; cursor: url(jitluh) -448.0017em 604.394em none; word-break: break-all;',
      'border-left-width: 630.9229em; padding: 79%;',
    ]);
  });

  describe('when shrinking', function () {
    it('should shrink', function () {
      const generator = new CssDeclarationListGenerator();
      expect(generator).toShrinkTowards(
        'scale: -6196617325576192 -975790292336640;'
      );
    });

    it('should honor the min setting of the original generator', function () {
      const generator = new CssDeclarationListGenerator({
        min: 2,
      });
      expect(generator).toShrinkTowards(
        'scale: -6196617325576192 -975790292336640; border-inline: thin;'
      );
    });
  });
});
