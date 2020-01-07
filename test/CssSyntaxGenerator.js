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
    ).toEqualSnapshot(['small', 'x-large', 'xx-large']);
  });

  it('supports a function call with parameters', () => {
    expect(
      new CssSyntaxGenerator('scale3d( <number> , <number> , <number> )').take(
        3
      )
    ).toEqualSnapshot([
      'scale3d(-2260084377780224 , 5342043492581376 , 8119347222413312)',
      'scale3d(-5702731889115136 , 4179231256870912 , 5038465087438848)',
      'scale3d(1777273287999488 , 1744697403899904 , -6196617325576192)'
    ]);
  });

  it('supports a double bar combinator', () => {
    expect(
      new CssSyntaxGenerator('[ left | right ] || [ top | bottom ]').take(3) // side-or-corner
    ).toEqualSnapshot(['bottom', 'bottom', 'top left']);
  });

  it('supports an optional multiplier', () => {
    expect(
      new CssSyntaxGenerator(`<wq-name> | <ns-prefix>? '*'`).take(3) // type-selector
    ).toEqualSnapshot(['sidfanu | fopcu', 'uf | *', '*']);
  });

  it('supports <declaration>', () => {
    expect(
      new CssSyntaxGenerator(
        '<declaration>? [ ; <page-body> ]? | <page-margin-box> <page-body>'
      ).take(3) // page-body
    ).toEqualSnapshot([
      'transition-delay: -633.1305s ; @bottom-right-corner { grid-area: auto / auto; } ; border-end-end-radius: 65%',
      'page-break-after: recto ;',
      '@top-center { column-count: auto; inset-inline-start: -136.11ch; clip: auto; mask-origin: fill-box; }'
    ]);
  });

  it('supports a 0 or more multiplier', () => {
    expect(
      new CssSyntaxGenerator('<color> && <color-stop-angle>?').take(3) // angular-color-stop
    ).toEqualSnapshot([
      'ButtonHighlight 60%',
      ' rgba(5%)',
      '416.1452rad rgb(97% / 94%)'
    ]);
  });

  it('supports a "between n and m" multiplier', () => {
    expect(
      new CssSyntaxGenerator('inset? && <length>{2,4} && <color>?').take(3) // shadow
    ).toEqualSnapshot([
      '-633.1305rem #98cb2c ',
      '-883.8328pc inset ',
      '301.777ch  saddlebrown'
    ]);
  });

  it('supports a reference to a declaration value syntax', () => {
    expect(
      new CssSyntaxGenerator("<'border-radius'>").take(3) // shadow
    ).toEqualSnapshot(['593.086vw', '78% / 15%', '-688.011cm']);
  });

  // https://drafts.csswg.org/css-values-3/#component-types
  it('should handle commas between optional items', function() {
    expect(
      new CssSyntaxGenerator('foo( <number>?, <number>?, <number>? )').take(10)
    ).toEqualSnapshot([
      'foo(8119347222413312)',
      'foo(5038465087438848 , 1744697403899904)',
      'foo()',
      'foo(-2995639344431104)',
      'foo(-6433539528589312 , 2718165087813632)',
      'foo(3999174336970752 , 7900263360757760)',
      'foo()',
      'foo(-5703277324795904 , -3526458282606592 , 445972312227840)',
      'foo()',
      'foo(2014962675351552)'
    ]);
  });
});
