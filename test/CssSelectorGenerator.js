const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssSelectorGenerator = require('../lib/CssSelectorGenerator');

describe('CssSelectorGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('supports a simple combinator', () => {
    expect(new CssSelectorGenerator().take(10)).toEqualSnapshot([
      ':future',
      '::marker',
      ':required',
      ':nth-last-child(2n+1)',
      ':indeterminate',
      ':first-child',
      ':read-only .wuw',
      ':any-link',
      '::',
      '::',
    ]);
  });
});
