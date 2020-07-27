const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssSelectorGenerator = require('../lib/CssSelectorGenerator');

describe('CssSelectorGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('supports a simple combinator', () => {
    expect(new CssSelectorGenerator().take(10)).toEqualSnapshot([
      ':focus',
      '::marker',
      ':right',
      ':nth-of-type(2n+1)',
      '*',
      ':last-child',
      ':first-of-type',
      ':required > .wuw',
      ':checked',
      ':active',
    ]);
  });
});
