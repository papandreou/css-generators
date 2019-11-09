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
      'border-top-color: currentcolor',
      'touch-action: auto',
      'outline-color: invert',
      'inset-inline-start: 15%',
      'column-span: none',
      '-moz-border-bottom-colors: hsla(1821526110240768 , 14% , 71% , 2%)',
      '-ms-scrollbar-track-color: ThreeDDarkShadow',
      'scroll-margin-block: 877.1055ex',
      '--goh: -985.8674pc',
      "-ms-filter: 'ted'"
    ]);
  });
});
