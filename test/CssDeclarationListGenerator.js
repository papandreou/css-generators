const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const CssDeclarationListGenerator = require('../lib/CssDeclarationListGenerator');

describe('CssDeclarationListGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS declaration list', () => {
    expect(new CssDeclarationListGenerator().take(10), 'to equal snapshot', [
      'place-content: unsafe flex-start safe left; -webkit-line-clamp: none;',
      '-moz-border-bottom-colors: hsla(1821526110240768 , 14% , 71% , 2%);',
      'translate: 94% -998.4425em 984.4232em;',
      "border-color: #865670; -ms-content-zoom-chaining: none; -ms-filter: 'ted'; -ms-scrollbar-darkshadow-color: hsl(-4813963569135616 , 46% , 9% , 62%);",
      'border-top-width: medium;',
      'inset-block-start: 4%; scroll-padding-block-end: 17%; contain: none; -ms-content-zoom-limit-max: 95%; text-size-adjust: 56%;',
      'bottom: -968.0675cm; backdrop-filter: grayscale(12%); left: 84%; -ms-hyphenate-limit-lines: no-limit; text-decoration: overline blink #2f529f;',
      'translate: 45% 39% 789.6547vmin;',
      'orphans: 85%; border-inline-color: rgb(19% , 4%); transition: 79.3843s 173.5023ms;',
      'border-block-start: dotted thick; -webkit-mask-image: none; -ms-content-zoom-limit-min: 99%; clip: auto; box-flex: -5427455770755072;'
    ]);
  });
});
