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
      ['small', 'x-large', 'xx-large']
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
      ['* | wosalda', '* | fopcu', '* | *']
    );
  });

  it('supports <declaration>', () => {
    expect(
      new CssNamedSyntaxGenerator('supports-condition').take(3),
      'to equal snapshot',
      [
        '(zin element(#tac) content content) and (gu #4de2d1)',
        '(column-count: 29%) and selector(uj | do [ sibsof | buunu ] : : de : va normal ) || hazekgin | uv : iwwuhsa : : kuj hidden ) : luhredad none ))',
        'selector(bu | wot : lod edges spaces objects box-decoration ) : : kos : inla isolate-override ) || * | * [ * | bi ] : : biga 48% ) : vudsi) or selector(sefuwaho | nuf #imeduj : : jemateh : ril > hu | * #pi : : cuug bottom 30% ) : ben)'
      ]
    );
  });

  it('supports a 0 or more multiplier', () => {
    expect(
      new CssNamedSyntaxGenerator('angular-color-stop').take(3),
      'to equal snapshot',
      [
        'ButtonHighlight 78%',
        '-108.3345deg rgb(46% / 33%)',
        '65% rgb(97% / 84%)'
      ]
    );
  });

  it('supports a "between n and m" multiplier', () => {
    expect(new CssNamedSyntaxGenerator('shadow').take(3), 'to equal snapshot', [
      '-633.1305rem currentcolor inset',
      '-108.3345em rgb(46% / 33%) inset',
      '301.777ch inset rgb(3999174336970752 , 94%)'
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
