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
        'bottom 45%, center, y-end -804.6558em',
        'center, 17%, 40.136em, top 94%',
        'y-start -608.0343pc, center',
        '59%, center',
        'bottom, 20%',
        'center, 77%',
      ]);
    });
  });

  describe('without a property name', () => {
    it('should generate any CSS declaration value', () => {
      expect(new CssDeclarationValueGenerator().take(10)).toEqualSnapshot([
        'outset',
        '197.317px',
        'border-box, text, content',
        'none',
        '#f044fd',
        'none',
        '-985.8674mm hsla(-3744389151064064 , 37% , 46%)',
        '38%',
        'discretionary-ligatures common-ligatures no-contextual',
        'auto',
      ]);
    });
  });
});
