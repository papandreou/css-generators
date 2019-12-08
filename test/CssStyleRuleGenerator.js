const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStyleRuleGenerator = require('../lib/CssStyleRuleGenerator');

describe('CssStyleRuleGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS style rule', () => {
    expect(new CssStyleRuleGenerator().take(10), 'to equal snapshot', [
      ':focus { transition-delay: -633.1305s; scroll-margin-block: 197.317px; border-image-slice: -7960857937969152 ; text-align: left; }',
      ':nth-of-type(8n+7) { background-clip: content-box; }',
      ':required { transform-box: border-box; -webkit-line-clamp: none; word-wrap: normal; mask-repeat: repeat-x; mask-origin: stroke-box; }',
      'iframe { clip: auto; }',
      ':nth-of-type(even) { background: padding-box right / contain repeat-x rgb(7965998619557888 , 81%) fixed left border-box; }',
      ':read-only { gap: 219.9933pt normal; border-inline-style: outset; }',
      ':hover { border-inline-end-style: groove; right: -149.6883pt; }',
      ':checked { margin-block-end: -937.3735vw; scroll-snap-align: center; grid-auto-columns: fit-content(789.6547vmin); }',
      ':nth-last-of-type(odd) { column-width: 140.888em; inset-inline-end: 922.3441in; scroll-snap-align: start; position: relative; left: auto; }',
      ':nth-last-of-type(even) { caption-side: block-end; letter-spacing: normal; border-end-end-radius: 604.394em; background-size: auto; font-variant-caps: unicase; }'
    ]);
  });

  describe('when shrinking', function() {
    it('should shrink', function() {
      const generator = new CssStyleRuleGenerator();
      expect(
        generator,
        'to shrink towards',
        ':first-child { background-origin: padding-box; }\n'
      );
    });

    it('should honor the minDeclarations setting of the original generator', function() {
      const generator = new CssStyleRuleGenerator({
        minDeclarations: 2
      });
      expect(
        generator,
        'to shrink towards',
        ':first { column-span: all; perspective: 275.115in; text-decoration-thickness: from-font; grid-row-start: wus; }\n' +
          ':checked { text-emphasis-position: right under; }\n'
      );
    });
});
