const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStyleRuleGenerator = require('../lib/CssStyleRuleGenerator');

describe('CssStyleRuleGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS style rule', () => {
    expect(new CssStyleRuleGenerator().take(10)).toEqualSnapshot([
      ':future { border-inline-start-style: double; border-inline: thin #054506; background-blend-mode: exclusion; transform: none; border-inline-start-color: lch(-8879903957057536 -3760881468964864 none); }',
      '* :empty { border-top-right-radius: 236.772em; font-size-adjust: ch-width from-font; }',
      ':nth-last-child(1n+1 of #notibaw ::ginbu ( 90% ):gib ( medium ) + bu:gor ::duvtih ( -378.0354Q ):rij ( 56% )) { inset-inline-end: 43%; border-block-start-width: -937.1417vmin; }',
      ':nth-of-type(6n+7) { border-end-start-radius: 54%; place-items: normal; mask-repeat: repeat; text-underline-offset: -408.7326px; border-block-start-color: darkgrey; }',
      '::cue(:first) { text-decoration-thickness: from-font; }',
      '::cue-region { offset-path: Q 73,-39 M -67,2 Q -17,-3 M 39,-76 M -33,-51 L -67,-36 M 4,12 L -19,-27 M 95,-49 L -51,-50 L -1,43 M -71,-43 L -93,-47 Q 96,1 Q -90,-94 M -31,82 Q -52,36; border-image-outset: -940654909718528; }',
      "::slotted([ notemdov = 'ser' ] ::or:vedewire) { outline: medium; caption-side: bottom; }",
      '::placeholder + :link { object-fit: fill; print-color-adjust: economy; padding-inline-start: 89%; font-variant-ligatures: no-historical-ligatures no-contextual common-ligatures no-discretionary-ligatures; accent-color: auto; }',
      ':enabled { overflow-y: clip; word-wrap: normal; padding-block: -349.2006em; }',
      ':right { page-break-inside: avoid; orphans: 14; margin-bottom: -264.5684px; caret-color: auto; }',
    ]);
  });

  describe('when shrinking', function () {
    it('should shrink', function () {
      const generator = new CssStyleRuleGenerator();
      expect(generator).toShrinkTowards(':future { transform: none; }');
    });

    it('should honor the declarationList setting of the original generator', function () {
      const generator = new CssStyleRuleGenerator({
        declarationList: {
          min: 2,
        },
      });
      expect(generator).toShrinkTowards(
        ':future { transform: none; border-inline-start-color: lch(-8879903957057536 -3760881468964864 none); }'
      );
    });
  });
});
