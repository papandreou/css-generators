const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStyleRuleGenerator = require('../lib/CssStyleRuleGenerator');

describe('CssStyleRuleGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS style rule', () => {
    expect(new CssStyleRuleGenerator().take(10)).toEqualSnapshot([
      ':focus { transition: step-end; mask-repeat: repeat-x; grid-row-start: auto; border-block-start: inset; }',
      ':first-of-type { border-image-outset: 2718165087813632; animation-direction: normal; vertical-align: bottom; scroll-padding-bottom: -998.4425em; }',
      '::slotted([ jimab | lel ] ::gemsibsof:ow) { mask-border: 3318847205539840 url(ebik) repeat luminance; outline-color: invert; contain: strict; list-style-image: url(gazziw); font-variant-alternates: swash(uhlog) annotation(sezsi) ornaments(ju) historical-forms stylistic(bu) character-variant(mahbu) styleset(wot); }',
      ':target { block-size: fit-content(302.1541cm); text-orientation: sideways; scroll-padding-top: -338.204cm; background-position: center bottom; }',
      ':first-child { padding-right: 64%; clip-path: none; mask-border: 76% fill / / -12.4088ch paint(biga , 31%); mask-border: round luminance cross-fade(7% paint(fuw , 266.8075cm) , cross-fade( conic-gradient(from -351.31turn , Background ,  currentcolor,  rgba(53%), rgb(-2925265000857600) -353.5941deg 71%, rgb(-4433065824747520 , -4471492611932160) 424.5412grad , rgb(1973735510769664 / 41%) ))); }',
      ':empty { text-emphasis-style: dot; margin-block: 45%; }',
      '::slotted(heajiupe | dovki #envewi ::ta ( round ):pufoj ( auto )) { text-shadow:  -542.9Q; border-inline-end-width: thick; }',
      '::selection { list-style: symbols() none; mask: match-source view-box url(movecuaw) top -797.057vw right 0% fill-box repeat-y subtract; overscroll-behavior: none; }',
      ':optional { border-top: rgb(49%); border-inline-start: inset midnightblue thin; mask-border-outset: -7319704678957056; letter-spacing: normal; offset: Q -13,59 Q 1,29 Q 34,-2 L -61,-54 L 0,-44 Q -96,54 Q -92,-65 L 89,-6 L -44,83 L -26,50 M 91,86 M -14,11 L 15,93 L 71,-85 M -39,-23 M 71,-47 M -3,-66 Q 11,-21 L 69,39 view-box 230.0145rem / auto; }',
      ':disabled > :link { text-align-last: end; page-break-inside: avoid; }',
    ]);
  });

  describe('when shrinking', function () {
    it('should shrink', function () {
      const generator = new CssStyleRuleGenerator();
      expect(generator).toShrinkTowards(
        ':focus { border-block-start: inset; }'
      );
    });

    it('should honor the declarationList setting of the original generator', function () {
      const generator = new CssStyleRuleGenerator({
        declarationList: {
          min: 2,
        },
      });
      expect(generator).toShrinkTowards(
        ':focus { mask-repeat: repeat-x; empty-cells: hide; }'
      );
    });
  });
});
