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
          'top 60%, ',
          'center',
          'center',
          'center, 2%, center, y-end -998.4425em, 223.3063pt',
          'center',
          'center',
          ', center, center',
          'center, center, center, center, top',
          'bottom, y-start, center',
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
