const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const CssSelectorGenerator = require('../lib/CssSelectorGenerator');

describe('CssSelectorGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('supports a simple combinator', () => {
    expect(new CssSelectorGenerator().take(10), 'to equal snapshot', [
      ':focus',
      ':target',
      '::placeholder',
      ':active',
      ':required',
      ':scope',
      ':nth-last-of-type(even)',
      ':invalid , *',
      ':lang(ti)',
      ':first-of-type'
    ]);
  });
});
