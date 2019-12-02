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
          'top 60%, bottom 416.1452Q',
          'center',
          'y-end , center, center,  223.3063pt, center',
          'center, center, bottom ',
          'center',
          'center, center, center, center, top ',
          'bottom , y-start , center',
          'center',
          'y-start -390.7725ch, center, center, top 666.3899ch, center',
          'center, center, center, bottom ,  18%'
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
