const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const CssDeclarationGenerator = require('../lib/CssDeclarationGenerator');

describe('CssDeclarationGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS property + value pair', () => {
    expect(new CssDeclarationGenerator().take(10), 'to equal snapshot', [
      'flex-grow: 5342043492581376',
      'transition-delay: -633.1305s',
      'scroll-behavior: smooth',
      'margin-top: -108.3345em',
      'border-block-end-style: none',
      'grid-auto-rows: fit-content(202.23em)',
      'padding-inline: 2%',
      'background-clip: content-box',
      'padding-top: 94%',
      'border-left-width: -636.3501vw'
    ]);
  });
});
