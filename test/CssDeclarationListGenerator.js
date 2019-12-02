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
      'inset-inline-end: 40%; border-color: rgb(8534420776550400);',
      'grid-auto-flow: dense; mask-position: bottom;',
      'grid-column-start: auto; shape-margin: 68%; border-inline-end: thick InfoBackground;',
      'font: icon; animation: step-start; font-weight: lighter; border-bottom-color: #7ec3e9; scroll-padding-inline-start: auto;',
      'text-justify: inter-character;',
      'border-inline-end-color: palevioletred; column-gap: normal;'
    ]);
  });
});
