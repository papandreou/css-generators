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
      ':hover',
      ':target',
      '::placeholder',
      ':active',
      ':right',
      ':target',
      ':nth-of-type(even)',
      ':lang(cu) || * + :last-child',
      '::before',
      ':first-of-type'
    ]);
  });
});
