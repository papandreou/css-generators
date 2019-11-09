const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const CssAtRuleGenerator = require('../lib/CssAtRuleGenerator');

describe('CssAtRuleGenerator', () => {
  beforeEach(() => chanceCache.clear());

  describe('with a name', () => {
    it('should generate that at-rule', () => {
      expect(
        new CssAtRuleGenerator({ name: 'font-face' }).take(10),
        'to equal snapshot',
        []
      );
    });
  });

  describe('without a name', () => {
    it('should generate any at-rule', () => {
      expect(new CssAtRuleGenerator().take(10), 'to equal snapshot', []);
    });
  });
});
