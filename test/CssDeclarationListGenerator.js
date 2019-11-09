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
      'scroll-margin-inline: 901.4287em; page-break-inside: avoid;',
      'margin-top: -108.3345em; border-block-end-style: none; grid-auto-rows: fit-content(202.23em);',
      'object-fit: fill; background-clip: content-box; padding-top: 94%; border-left-width: -636.3501vw;',
      'mask-position: center left;',
      'inset-inline-end: 40%; border-color: rgb(8534420776550400 / -4813963569135616);',
      'border-block-width: thick; mask-position: bottom; margin-right: 4%;',
      'mask-image: url(ca); transition: -390.7725ms -804.6558ms step-start none; overflow-wrap: normal; mask-mode: luminance; scroll-padding-inline-start: auto;',
      'text-justify: inter-character;',
      'border-inline-end-color: palevioletred; column-gap: normal;',
      'border-left-style: double; margin-block: -937.3735vw; scroll-padding-right: 878.9979mm;'
    ]);
  });
});
