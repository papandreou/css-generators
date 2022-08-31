const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssNamedSyntaxGenerator = require('../lib/CssNamedSyntaxGenerator');

describe('CssNamedSyntaxGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('supports a simple combinator', () => {
    expect(
      new CssNamedSyntaxGenerator('absolute-size').take(3)
    ).toEqualSnapshot(['small', 'xxx-large', 'x-large']);
  });

  it('supports a function call with parameters', () => {
    expect(new CssNamedSyntaxGenerator('scale3d()').take(3)).toEqualSnapshot([
      'scale3d(18%, 60%)',
      'scale3d(-6197051738030080, -734106774142976, 60%)',
      'scale3d(2%)',
    ]);
  });

  // https://drafts.csswg.org/css-values-3/#numeric-ranges
  it('supports the bracketed range restriction syntax with <number>', () => {
    expect(
      new CssNamedSyntaxGenerator('number [10,14]').take(3)
    ).toEqualSnapshot(['11', '13', '14']);
  });

  it('supports a double bar combinator', () => {
    expect(
      new CssNamedSyntaxGenerator('side-or-corner').take(3)
    ).toEqualSnapshot(['bottom', 'bottom left', 'left']);
  });

  it('supports an optional multiplier', () => {
    expect(
      new CssNamedSyntaxGenerator('type-selector').take(3)
    ).toEqualSnapshot(['* | daej', '*', '*']);
  });

  it('supports <declaration>', () => {
    expect(
      new CssNamedSyntaxGenerator('supports-condition').take(3)
    ).toEqualSnapshot([
      '(fidci thick dotted) and (not (not (visibility: hidden)))',
      'sibsof ( auto ) and ve ( definite-first )',
      "not (((scroll-padding-inline-end: 90%) and pakuj ( hsla(5443896876204032 , 7% , 99%) hidden )) and ((taevoka 67%) or selector([ bi = 'bu' i ] ::gewse:jocnuf *:ti ::ril ( -663.4179ic ):ugher ( auto ))))",
    ]);
  });

  it('supports string-token', () => {
    expect(new CssNamedSyntaxGenerator('string-token').take(3)).toEqualSnapshot(
      ["'ofosid'", "'daej'", "'wocu'"]
    );
  });

  it('supports name-repeat', () => {
    expect(new CssNamedSyntaxGenerator('name-repeat').take(3)).toEqualSnapshot([
      'repeat(96 , [ fidci ])',
      'repeat(15 , [ wuw ])',
      'repeat(100 , [ bibro ])',
    ]);
  });

  it('supports dimension', () => {
    expect(new CssNamedSyntaxGenerator('dimension').take(10)).toEqualSnapshot([
      '-250.9198s',
      '901.4287dpi',
      '463.9879s',
      '197.317pc',
      '-687.9628in',
      '-688.011cm',
      '-883.8328in',
      '732.3523grad',
      '202.23dpcm',
      '416.1452px',
    ]);
  });

  it('supports a 0 or more multiplier', () => {
    expect(
      new CssNamedSyntaxGenerator('angular-color-stop').take(3)
    ).toEqualSnapshot([
      'hsl(-108.3345deg , 5% , 87%) 5% 84%',
      ' Menu',
      ' rgb(40% 14% 4% 29% , -7374978819293184)',
    ]);
  });

  it('supports a "between n and m" multiplier', () => {
    expect(new CssNamedSyntaxGenerator('shadow').take(3)).toEqualSnapshot([
      '463.9879vh 197.317px  ',
      ' lch(none 97% none / 62%) 223.3063pc -985.8674mm',
      'inset  -415.7107vw -267.2763em',
    ]);
  });

  it('supports <language-code>', () => {
    expect(
      new CssNamedSyntaxGenerator('language-code').take(3)
    ).toEqualSnapshot(['ik', 'sn', 'vi']);
  });

  it('supports <string>', () => {
    expect(new CssNamedSyntaxGenerator('string').take(3)).toEqualSnapshot([
      "'ofosid'",
      "'daej'",
      "'wocu'",
    ]);
  });
});
