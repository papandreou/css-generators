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
      ':scope { block-size: auto; float: inline-start; border-bottom-color: ThreeDShadow; scroll-padding-top: -338.204cm; }',
      '* { contain: content; cursor: url(sogrij) grab; }',
      ':read-write { pointer-events: fill; mask-border: luminance; inset-inline-start: 45.4657rem; grid-auto-flow: row; border-block-start-width: -937.1417vmin; }',
      ':only-of-type { content: none; letter-spacing: 815.133em; box-shadow: -593.8776ex rgb(29% , 6853899260526592) inset; }',
      ':only-child { column-rule-style: groove; border-block-start-style: inset; grid-template-rows: subgrid; border-inline-start-width: thin; text-decoration-style: wavy; }',
      ':not(: kujemat ::barilva:ofhi ~ . hug ::wejujo:caku ( 361.4109em )) { inset-inline-end: 99%; margin-right: 185.3935rem; border-block-color: currentcolor; }',
      ':focus { border-width: medium; scroll-margin-bottom: -264.4337pt; }'
    ]);
  });

  describe('when shrinking', function() {
    it('should shrink', function() {
      const generator = new CssStyleRuleGenerator();
      expect(generator).toShrinkTowards(
        ':focus { border-block-start: inset; }'
      );
    });

    it('should honor the declarationList setting of the original generator', function() {
      const generator = new CssStyleRuleGenerator({
        declarationList: {
          min: 2
        }
      });
      expect(generator).toShrinkTowards(
        ':focus { mask-repeat: repeat-x; empty-cells: hide; }'
      );
    });
  });
});
