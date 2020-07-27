const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssDeclarationGenerator = require('../lib/CssDeclarationGenerator');

describe('CssDeclarationGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS property + value pair', () => {
    expect(new CssDeclarationGenerator().take(10)).toEqualSnapshot([
      'font-optical-sizing: none',
      'border-inline-start-style: double',
      'border-inline: thin black',
      'padding-inline-end: 0%',
      'border-inline-start-color: #9c954d',
      'list-style-position: inside',
      'animation-duration: 49.5493s',
      'font-variant-caps: normal',
      'column-rule: hidden double double medium thin 884.4036vw hsla(-4665270404644864 69% 61%)',
      'scroll-padding-bottom: auto',
    ]);
  });
});
