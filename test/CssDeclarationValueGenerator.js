const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const CssDeclarationValueGenerator = require('../lib/CssDeclarationValueGenerator');

describe('CssDeclarationValueGenerator', () => {
  beforeEach(() => chanceCache.clear());

  describe('with a property name', () => {
    it('should generate a valid values for that property', () => {
      expect(
        new CssDeclarationValueGenerator('background-position-y').take(10),
        'to equal snapshot',
        [
          'center',
          'y-end 463.9879vh',
          'y-start -108.3345em',
          'center',
          'center',
          'center',
          'bottom 14%',
          'y-start -887.1769vw',
          'y-end 21%',
          'center'
        ]
      );
    });
  });

  describe('without a property name', () => {
    it('should generate any CSS declaration value', () => {
      expect(new CssDeclarationValueGenerator().take(10), 'to equal snapshot', [
        '96%',
        'pink',
        '15%',
        '-800.0502ch',
        'none',
        'medium',
        'outset medium currentcolor',
        'auto',
        'false',
        'normal'
      ]);
    });
  });
});
