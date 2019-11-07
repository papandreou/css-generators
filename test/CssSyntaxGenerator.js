const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));

const CssSyntaxGenerator = require('../lib/CssSyntaxGenerator');

describe('CssSyntaxGenerator', () => {
  it('supports a simple combinator', () => {
    expect(
      new CssSyntaxGenerator('absolute-size').take(3),
      'to equal snapshot',
      ['small', 'x-large', 'xx-large']
    );
  });

  it('supports a function call with parameters', () => {
    expect(new CssSyntaxGenerator('scale3d()').take(3), 'to equal snapshot', [
      'scale3d(-5702731889115136 , 4179231256870912 , 5038465087438848)',
      'scale3d(1777273287999488 , 1744697403899904 , -6196617325576192)',
      'scale3d(-975790292336640 , -6197051738030080 , -7206211195764736)'
    ]);
  });

  it('supports a double bar combinator', () => {
    expect(
      new CssSyntaxGenerator('side-or-corner').take(3),
      'to equal snapshot',
      ['right', 'top', 'top right']
    );
  });

  it('supports an optional multiplier', () => {
    expect(
      new CssSyntaxGenerator('type-selector').take(3),
      'to equal snapshot',
      ['* | *', 'uf | *', 'bibro | *']
    );
  });

  it.skip('supports <declaration>', () => {
    expect(
      new CssSyntaxGenerator('supports-condition').take(3),
      'to equal snapshot',
      []
    );
  });

  it('supports a 0 or more multiplier', () => {
    expect(
      new CssSyntaxGenerator('angular-color-stop').take(3),
      'to equal snapshot',
      [
        'currentcolor 20%',
        'InfoText -907.0992turn',
        '-99.0015deg rgb(7965998619557888 , 56%)'
      ]
    );
  });

  it('supports a "between n and m" multiplier', () => {
    expect(new CssSyntaxGenerator('shadow').take(3), 'to equal snapshot', [
      'rgb(23% / 24%) inset -119.695rad',
      'inset 666.3899deg rgba(-1962477596180480 , -5724325764136960)',
      '-149.6883rad rgba(57% , -8443109138497536) inset'
    ]);
  });
});
