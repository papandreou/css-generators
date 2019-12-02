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
      'flex-shrink: 5342043492581376',
      'transition-delay: -633.1305s',
      'scroll-margin-block: 197.317px',
      'border-image-slice: -7960857937969152 ',
      'text-align: left',
      'mask-composite: add',
      'padding-inline-start: 2%',
      'background-clip: content-box',
      'page-break-after: recto',
      'transform-box: border-box'
    ]);
  });
});
