const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssSyntaxGenerator = require('../lib/CssSyntaxGenerator');

describe('CssSyntaxGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('supports an already parsed node', () => {
    expect(
      new CssSyntaxGenerator(
        require('css-syntax-parser').default('xx-small | x-small')
      ).take(3)
    ).toEqualSnapshot(['xx-small', 'x-small', 'x-small']);
  });

  it('supports a simple combinator', () => {
    expect(
      new CssSyntaxGenerator(
        'xx-small | x-small | small | medium | large | x-large | xx-large' // absolute-size
      ).take(3)
    ).toEqualSnapshot(['small', 'xx-large', 'x-large']);
  });

  it('supports a range on a keyword', () => {
    expect(new CssSyntaxGenerator('foo{1,2}').take(5)).toEqualSnapshot([
      'foo',
      'foo foo',
      'foo foo',
      'foo',
      'foo foo',
    ]);
  });

  it('supports a function call with parameters', () => {
    expect(
      new CssSyntaxGenerator('scale3d( <number> , <number> , <number> )').take(
        3
      )
    ).toEqualSnapshot([
      'scale3d(5342043492581376 , -5702731889115136 , 5038465087438848)',
      'scale3d(1744697403899904 , -975790292336640 , -7206211195764736)',
      'scale3d(-734106774142976 , -2995639344431104 , -6433539528589312)',
    ]);
  });

  it('supports a double bar combinator', () => {
    expect(
      new CssSyntaxGenerator('[ left | right ] || [ top | bottom ]').take(3) // side-or-corner
    ).toEqualSnapshot(['bottom', 'bottom left', 'left']);
  });

  it('supports an optional multiplier', () => {
    expect(
      new CssSyntaxGenerator(`<wq-name> | <ns-prefix>? '*'`).take(3) // type-selector
    ).toEqualSnapshot(['* | daej', '*', '*']);
  });

  it('supports <declaration>', () => {
    expect(
      new CssSyntaxGenerator(
        '<declaration>? [ ; <page-body> ]? | <page-margin-box> <page-body>'
      ).take(3) // page-body
    ).toEqualSnapshot([
      'border-inline-start-style: double',
      '',
      '; animation-direction: alternate-reverse ; ; align-items: stretch',
    ]);
  });

  it('supports a 0 or more multiplier', () => {
    expect(
      new CssSyntaxGenerator('<color> && <color-stop-angle>?').take(3) // angular-color-stop
    ).toEqualSnapshot([
      'rgba(1744697403899904 -6196617325576192 -975790292336640 -6197051738030080) ',
      '#b5443e 84%',
      ' Menu',
    ]);
  });

  it('supports a "between n and m" multiplier', () => {
    expect(
      new CssSyntaxGenerator('inset? && <length>{2,4} && <color>?').take(3) // shadow
    ).toEqualSnapshot([
      '463.9879vh 197.317px  ',
      ' #b5443e -958.8311ch 939.8197rem 664.8853vw',
      'inset #01cf18 -953.8752in 49.5493Q -200.2781em',
    ]);
  });

  it('supports a reference to a declaration value syntax', () => {
    expect(
      new CssSyntaxGenerator("<'border-radius'>").take(3) // shadow
    ).toEqualSnapshot([
      '73% 60% -688.011cm 732.3523mm / 5% 84% 0%',
      '-391.5155Q 43% 49.5493Q -906.6687in / 570.3519Q',
      '59% 719.8808Q / 897.7711vw 81%',
    ]);
  });

  // https://drafts.csswg.org/css-values-3/#component-types
  it('should handle commas between optional items', function () {
    expect(
      new CssSyntaxGenerator('foo( <number>?, <number>?, <number>? )').take(10)
    ).toEqualSnapshot([
      'foo(-5702731889115136 , 1777273287999488)',
      'foo(-975790292336640)',
      'foo(1821526110240768)',
      'foo(-8636381890871296)',
      'foo(5988754133090304 , -8993170276745216)',
      'foo(2116358691094528 , -8879903957057536)',
      'foo()',
      'foo(-1803944254767104)',
      'foo(-4813963569135616)',
      'foo(-5410196146880512)',
    ]);
  });
});
