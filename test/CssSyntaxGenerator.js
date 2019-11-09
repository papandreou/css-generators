const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const CssSyntaxGenerator = require('../lib/CssSyntaxGenerator');

describe('CssSyntaxGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('supports an already parsed node', () => {
    expect(
      new CssSyntaxGenerator(
        require('css-syntax-parser').default('xx-small | x-small')
      ).take(3),
      'to equal snapshot',
      ['xx-small', 'x-small', 'x-small']
    );
  });

  it('supports a simple combinator', () => {
    expect(
      new CssSyntaxGenerator(
        'xx-small | x-small | small | medium | large | x-large | xx-large' // absolute-size
      ).take(3),
      'to equal snapshot',
      ['small', 'x-large', 'xx-large']
    );
  });

  it('supports a function call with parameters', () => {
    expect(
      new CssSyntaxGenerator('scale3d( <number> , <number> , <number> )').take(
        3
      ),
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
      new CssSyntaxGenerator('[ left | right ] || [ top | bottom ]').take(3), // side-or-corner
      'to equal snapshot',
      ['bottom', 'bottom', 'top left']
    );
  });

  it('supports an optional multiplier', () => {
    expect(
      new CssSyntaxGenerator(`<wq-name> | <ns-prefix>? '*'`).take(3), // type-selector
      'to equal snapshot',
      ['* | wosalda', '* | fopcu', '* | *']
    );
  });

  it.skip('supports <declaration>', () => {
    expect(
      new CssSyntaxGenerator(
        '<declaration>? [ ; <page-body> ]? | <page-margin-box> <page-body>'
      ).take(3), // page-body
      'to equal snapshot',
      []
    );
  });

  it('supports a 0 or more multiplier', () => {
    expect(
      new CssSyntaxGenerator('<color> && <color-stop-angle>?').take(3), // angular-color-stop
      'to equal snapshot',
      [
        'ButtonHighlight 78%',
        '-108.3345deg rgb(46% / 33%)',
        '65% rgb(97% / 84%)'
      ]
    );
  });

  it('supports a "between n and m" multiplier', () => {
    expect(
      new CssSyntaxGenerator('inset? && <length>{2,4} && <color>?').take(3), // shadow
      'to equal snapshot',
      [
        '-633.1305rem currentcolor inset',
        '-108.3345em rgb(46% / 33%) inset',
        '301.777ch inset rgb(3999174336970752 , 94%)'
      ]
    );
  });

  it('supports a reference to a declaration value syntax', () => {
    expect(
      new CssSyntaxGenerator("<'border-radius'>").take(3), // shadow
      'to equal snapshot',
      ['593.086vw / 463.9879vh', '60% / -108.3345em', '-883.8328pc / 33%']
    );
  });
});
