const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssDeclarationGenerator = require('../lib/CssDeclarationGenerator');

describe('CssDeclarationGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS property + value pair', () => {
    expect(new CssDeclarationGenerator().take(10)).toEqualSnapshot([
      'font-optical-sizing: none',
      'border-inline-start-style: double',
      'border-inline: thin #054506',
      'background-blend-mode: exclusion',
      'transform: none',
      'border-inline-start-color: lch(-8879903957057536 -3760881468964864 none)',
      'border-end-start-radius: -267.2763em',
      'grid-template-rows: none',
      'min-block-size: 99%',
      'mask-origin: margin-box',
    ]);
  });
});
