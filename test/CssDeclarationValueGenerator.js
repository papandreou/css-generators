const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssDeclarationValueGenerator = require('../lib/CssDeclarationValueGenerator');

describe('CssDeclarationValueGenerator', () => {
  beforeEach(() => chanceCache.clear());

  describe('with a property name', () => {
    it('should generate valid values for that property', () => {
      expect(
        new CssDeclarationValueGenerator({
          propertyName: 'background-position-y',
        }).take(10)
      ).toEqualSnapshot([
        'top 45%, center',
        'center',
        '939.8197rem, top',
        'center, center, y-start, center, y-start',
        'bottom 45%, center, y-end -804.6558ex',
        'center, 17%, 40.136ex, top 94%',
        'y-start -608.0343pt, center',
        '59%, center',
        'bottom, 20%',
        'center, 77%',
      ]);
    });
  });

  describe('without a property name', () => {
    it('should generate any CSS declaration value', () => {
      expect(new CssDeclarationValueGenerator().take(10)).toEqualSnapshot([
        '73% 60%',
        'scroll',
        '-332.5828Q 301.777ch 664.8853vw auto',
        'normal',
        '43% 49.5493Q',
        'start',
        '-87.86cm 20%',
        '59%',
        'none',
        'strict',
      ]);
    });
  });
});
