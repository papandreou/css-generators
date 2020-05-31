const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssNamedSyntaxGenerator = require('../lib/CssNamedSyntaxGenerator');

describe('CssNamedSyntaxGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('supports a simple combinator', () => {
    expect(
      new CssNamedSyntaxGenerator('absolute-size').take(3)
    ).toEqualSnapshot(['small', 'xx-large', 'xxx-large']);
  });

  it('supports a function call with parameters', () => {
    expect(new CssNamedSyntaxGenerator('scale3d()').take(3)).toEqualSnapshot([
      'scale3d(-2260084377780224 , 5342043492581376 , 8119347222413312)',
      'scale3d(-5702731889115136 , 4179231256870912 , 5038465087438848)',
      'scale3d(1777273287999488 , 1744697403899904 , -6196617325576192)',
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
    ).toEqualSnapshot(['bottom', 'bottom', 'top left']);
  });

  it('supports an optional multiplier', () => {
    expect(
      new CssNamedSyntaxGenerator('type-selector').take(3)
    ).toEqualSnapshot(['sidfanu | fopcu', 'uf | *', '*']);
  });

  it('supports <declaration>', () => {
    expect(
      new CssNamedSyntaxGenerator('supports-condition').take(3)
    ).toEqualSnapshot([
      '(zin fixed) and (not (wocu ( 67% ) and uf ( url(bibro) )))',
      '(not ((grid-template-rows: none) or (pu 4%))) and (naowruj -804.6558ex)',
      '(ebik ( 325.0446vh ) and ((margin-inline-end: 18%) and ((muwwuh 140.888em) or (transition-property: none)))) or ruluhred ( thick )',
    ]);
  });

  it('supports string-token', () => {
    expect(
      new CssNamedSyntaxGenerator('string-token').take(3)
    ).toEqualSnapshot(["'ofosid'", "'daej'", "'wocu'"]);
  });

  it('supports name-repeat', () => {
    expect(new CssNamedSyntaxGenerator('name-repeat').take(3)).toEqualSnapshot([
      'repeat(80% , [ wosalda ])',
      'repeat(87% , [ fopcu ])',
      'repeat(auto-fill , [ gafgohrak ])',
    ]);
  });

  it('supports dimension', () => {
    expect(new CssNamedSyntaxGenerator('dimension').take(10)).toEqualSnapshot([
      '-250.9198turn',
      '901.4287dppx',
      '463.9879s',
      '197.317pt',
      '-687.9628kHz',
      '-688.011deg',
      '-883.8328kHz',
      '732.3523grad',
      '202.23dpi',
      '416.1452Q',
    ]);
  });

  it('supports a 0 or more multiplier', () => {
    expect(
      new CssNamedSyntaxGenerator('angular-color-stop').take(3)
    ).toEqualSnapshot([
      'ButtonHighlight 60%',
      ' rgba(5%)',
      '416.1452rad rgb(97% / 94%)',
    ]);
  });

  it('supports a "between n and m" multiplier', () => {
    expect(new CssNamedSyntaxGenerator('shadow').take(3)).toEqualSnapshot([
      '-633.1305rem #98cb2c ',
      '-883.8328pc inset ',
      '301.777ch  saddlebrown',
    ]);
  });

  it('supports <language-code>', () => {
    expect(
      new CssNamedSyntaxGenerator('language-code').take(3)
    ).toEqualSnapshot(['ii', 'sn', 'vi']);
  });

  it('supports <string>', () => {
    expect(new CssNamedSyntaxGenerator('string').take(3)).toEqualSnapshot([
      "'ofosid'",
      "'daej'",
      "'wocu'",
    ]);
  });
});
