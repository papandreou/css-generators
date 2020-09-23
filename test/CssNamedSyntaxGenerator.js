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
      'scale3d(5342043492581376 , -5702731889115136 , 5038465087438848)',
      'scale3d(1744697403899904 , -975790292336640 , -7206211195764736)',
      'scale3d(-734106774142976 , -2995639344431104 , -6433539528589312)',
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
      'sibsof ( 897.7711vw ) and (overflow-wrap: normal)',
      'selector(#pe ::okonokan:log ( -286.4934vw -438.131Q 85.3922in ) #gebuwo ::duvtih ( auto ):inla ( bottom 421.3258pc left -937.1417vmin )) or selector(| * . ahoilhak ::kujemat:ril ( -511.749vw ) *:wejujo ( italic ) ::piz ( cross-fade(47% repeating-linear-gradient(670.605deg , rgb(68% 22% 1% , 35%) 40%, currentcolor 849.3873px 26%, currentcolor 992.5074cm 56% -442.2573mm , currentcolor 64%) , currentcolor) ):vub ( paint(gohigo) ))',
    ]);
  });

  it('supports string-token', () => {
    expect(
      new CssNamedSyntaxGenerator('string-token').take(3)
    ).toEqualSnapshot(["'ofosid'", "'daej'", "'wocu'"]);
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
      'rgba(1744697403899904 -6196617325576192 -975790292336640 -6197051738030080) ',
      '#b5443e 84%',
      ' Menu',
    ]);
  });

  it('supports a "between n and m" multiplier', () => {
    expect(new CssNamedSyntaxGenerator('shadow').take(3)).toEqualSnapshot([
      '463.9879vh 197.317px  ',
      ' #b5443e -958.8311ch 939.8197rem 664.8853vw',
      'inset #01cf18 -953.8752in 49.5493Q -200.2781em',
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
