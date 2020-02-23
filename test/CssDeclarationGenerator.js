const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssDeclarationGenerator = require('../lib/CssDeclarationGenerator');

describe('CssDeclarationGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS property + value pair', () => {
    expect(new CssDeclarationGenerator().take(10)).toEqualSnapshot([
      'font-optical-sizing: none',
      'transition: step-end',
      'mask-repeat: repeat-x',
      'grid-row-start: auto',
      'border-block-start: inset',
      'empty-cells: hide',
      'border-image-outset: 2718165087813632',
      'animation-direction: normal',
      'vertical-align: bottom',
      'scroll-padding-bottom: -998.4425em'
    ]);
  });
});
