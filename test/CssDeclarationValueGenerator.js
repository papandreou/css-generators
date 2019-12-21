const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssDeclarationValueGenerator = require('../lib/CssDeclarationValueGenerator');

describe('CssDeclarationValueGenerator', () => {
  beforeEach(() => chanceCache.clear());

  describe('with a property name', () => {
    it('should generate valid values for that property', () => {
      expect(
        new CssDeclarationValueGenerator({
          propertyName: 'background-position-y'
        }).take(10)
      ).toEqualSnapshot([
        'top 60%, bottom 416.1452Q',
        'center',
        'y-end, center, center, 223.3063pt, center',
        'center, center, bottom',
        'center',
        'center, center, center, center, top',
        'bottom, y-start, center',
        'center',
        'y-start -390.7725ch, center, center, top 666.3899ch, center',
        'center, center, center, bottom, 18%'
      ]);
    });
  });

  describe('without a property name', () => {
    it('should generate any CSS declaration value', () => {
      expect(new CssDeclarationValueGenerator().take(10)).toEqualSnapshot([
        '96%',
        'pink',
        'isolate',
        'fixed',
        'scroll',
        '-81.5022vmax -332.5828Q auto 301.777ch',
        'none',
        '67%',
        'none',
        'false'
      ]);
    });
  });
});
