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
      ':focus { transition-delay: -633.1305s; scroll-behavior: smooth; margin-top: -108.3345em; border-block-end-style: none; }',
      ':lang(ti) { mask-clip: no-clip; object-fit: fill; }',
      '* { padding-top: 94%; border-left-width: -636.3501vw; border-inline-end-style: groove; column-count: auto; inset-inline-end: -136.11ch; }',
      ':enabled { mask-mode: luminance; border-color: rgb(8534420776550400); border-start-end-radius: -818.7872vh; }',
      ':only-child { float: none; }',
      '::selection { grid-column-start: auto; shape-margin: 68%; border-inline-end: thick InfoBackground; }',
      ':valid { column-count: -81%; border-spacing: 368.4661ex; }',
      ':out-of-range { mask-mode: luminance; }',
      ':visited { border-inline-color: Highlight; }',
      ':disabled { orphans: 51%; }'
    ]);
  });
});
