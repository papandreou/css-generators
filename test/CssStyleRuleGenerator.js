const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStyleRuleGenerator = require('../lib/CssStyleRuleGenerator');

describe('CssStyleRuleGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS style rule', () => {
    expect(new CssStyleRuleGenerator().take(10), 'to equal snapshot', [
      ':hover { transition-delay: -633.1305s; scroll-behavior: smooth; margin-top: -108.3345em; border-block-end-style: none; }',
      ':last-child { content: none; border-end-end-radius: 65%; animation-delay: -887.1769s; padding-top: 94%; border-left-width: -636.3501vw; }',
      ':active { column-count: auto; inset-inline-end: -136.11ch; clear: both; mask-mode: luminance; }',
      '#lel :target + :only-child { float: none; }',
      '::slotted(sof | * . ow ::lebho hsla(1981523607683072 , 50% , 84% , -5884139412652032) ):gokim 93.4206s )) { animation-iteration-count: 6166054300549120; }',
      ':scope { transform-box: fill-box; text-emphasis: GrayText none; margin-block: 41.6685ch; }',
      '::placeholder { scroll-padding-top: auto; place-self: normal stretch; }',
      ':visited { empty-cells: hide; break-inside: avoid-column; left: -718.1516in; }',
      ':valid { background-size: auto; }',
      ':in-range { font-kerning: auto; clip: rect(-971.8404vmax , -602.3152rem , 422.6839rem , 580.3511vh); mask-composite: add; text-underline-position: auto; }'
    ]);
  });
});
