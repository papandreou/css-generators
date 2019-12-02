const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const CssNamedSyntaxGenerator = require('../lib/CssNamedSyntaxGenerator');

describe('CssNamedSyntaxGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('supports a simple combinator', () => {
    expect(
      new CssNamedSyntaxGenerator('absolute-size').take(3),
      'to equal snapshot',
      ['small', 'xx-large', 'xxx-large']
    );
  });

  it('supports a function call with parameters', () => {
    expect(
      new CssNamedSyntaxGenerator('scale3d()').take(3),
      'to equal snapshot',
      [
        'scale3d(-2260084377780224 , 5342043492581376 , 8119347222413312)',
        'scale3d(-5702731889115136 , 4179231256870912 , 5038465087438848)',
        'scale3d(1777273287999488 , 1744697403899904 , -6196617325576192)'
      ]
    );
  });

  it('supports a double bar combinator', () => {
    expect(
      new CssNamedSyntaxGenerator('side-or-corner').take(3),
      'to equal snapshot',
      ['bottom', 'bottom', 'top left']
    );
  });

  it('supports an optional multiplier', () => {
    expect(
      new CssNamedSyntaxGenerator('type-selector').take(3),
      'to equal snapshot',
      ['sidfanu | fopcu', 'uf | *', '*']
    );
  });

  it('supports <declaration>', () => {
    expect(
      new CssNamedSyntaxGenerator('supports-condition').take(3),
      'to equal snapshot',
      [
        '(zin fixed) and (not (wocu ( 67% ) and uf ( -391.5155Q )))',
        '((not selector(#uj ::apli:cuval ( -973.4701vw ) || * . ho ::dolbaw:vo)) and ((line-height: -630.2911ch) and (okonokan space-between))) and zeenejom ( hidden )',
        'not uk ( -602.5687in )'
      ]
    );
  });

  it('supports string-token', () => {
    expect(
      new CssNamedSyntaxGenerator('string-token').take(3),
      'to equal snapshot',
      ["'ofosid'", "'daej'", "'wocu'"]
    );
  });

  it('supports name-repeat', () => {
    expect(
      new CssNamedSyntaxGenerator('name-repeat').take(3),
      'to equal snapshot',
      [
        'repeat(80% , [ wosalda ])',
        'repeat(87% , [ fopcu ])',
        'repeat(auto-fill , [ gafgohrak ])'
      ]
    );
  });

  it('supports dimension', () => {
    expect(
      new CssNamedSyntaxGenerator('dimension').take(10),
      'to equal snapshot',
      [
        '-250.9198turn',
        '901.4287dppx',
        '463.9879s',
        '197.317pt',
        '-687.9628kHz',
        '-688.011deg',
        '-883.8328kHz',
        '732.3523grad',
        '202.23dpi',
        '416.1452Q'
      ]
    );
  });

  it('supports a 0 or more multiplier', () => {
    expect(
      new CssNamedSyntaxGenerator('angular-color-stop').take(3),
      'to equal snapshot',
      ['ButtonHighlight 60%', ' rgba(5%)', '416.1452rad rgb(97% / 94%)']
    );
  });

  it('supports a "between n and m" multiplier', () => {
    expect(new CssNamedSyntaxGenerator('shadow').take(3), 'to equal snapshot', [
      '-633.1305rem #98cb2c ',
      '-883.8328pc inset ',
      '301.777ch  saddlebrown'
    ]);
  });

  it('supports <language-code>', () => {
    expect(
      new CssNamedSyntaxGenerator('language-code').take(3),
      'to equal snapshot',
      ['ii', 'sn', 'vi']
    );
  });

  it('supports <string>', () => {
    expect(new CssNamedSyntaxGenerator('string').take(3), 'to equal snapshot', [
      "'ofosid'",
      "'daej'",
      "'wocu'"
    ]);
  });
});
