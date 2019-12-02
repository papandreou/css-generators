const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const CssDeclarationValueGenerator = require('../lib/CssDeclarationValueGenerator');

describe('CssDeclarationValueGenerator', () => {
  beforeEach(() => chanceCache.clear());

  describe('with a property name', () => {
    it('should generate valid values for that property', () => {
      expect(
        new CssDeclarationValueGenerator({
          propertyName: 'background-position-y'
        }).take(10),
        'to equal snapshot',
        [
          'center',
          'top 60%',
          ' ',
          'center',
          'center',
          'center',
          'center',
          ' 416.1452Q',
          'center',
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
