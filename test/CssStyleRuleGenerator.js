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
      '::slotted( valbuunu . de ::va ( normal ):ik ( available )) { quotes: none; font-variant-caps: petite-caps; border-left-style: double; margin-block: -937.3735vw; }',
      '::after { grid-area: span dipakuj 50% / sezsi; break-after: avoid; clip-path: none; border-inline: thick; }',
      ':in-range { font-kerning: auto; clip: rect(-971.8404vmax , -602.3152rem , 422.6839rem , 580.3511vh); mask-composite: add; text-underline-position: auto; }',
      ":optional { text-overflow: 'neclekos'; }",
      ':nth-last-of-type(even) { text-decoration-line: overline underline; scroll-snap-align: center; }',
      ':required { border-start-start-radius: 25%; height:  -949.1618pc; border-block-start: thick; }'
    ]);
  });
});
