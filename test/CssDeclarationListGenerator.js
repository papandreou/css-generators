const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const CssDeclarationListGenerator = require('../lib/CssDeclarationListGenerator');

describe('CssDeclarationListGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS declaration list', () => {
    expect(new CssDeclarationListGenerator().take(10), 'to equal snapshot', [
      'place-content: unsafe right; padding-right: 60%;',
      'column-span: none;',
      '-ms-scroll-chaining: chained;',
      'border-inline-end-style: groove; -webkit-appearance: progress-bar-value; margin-top: -887.1769vw; offset-rotate: -998.4425deg reverse; -webkit-overflow-scrolling: touch;',
      "letter-spacing: -985.8674pc; -ms-filter: 'ted';",
      'border-bottom-left-radius: 37%;',
      'counter-increment: gemsibsof 45%; -ms-scroll-limit-y-max: auto;',
      'text-size-adjust: 56%; resize: horizontal; border-end-end-radius: -804.6558ex; mask-type: luminance; column-rule-color: cornflowerblue;',
      "font-language-override: 'ik'; block-overflow: clip; mask-border-slice: 31% fill; clip-path: stroke-box;",
      '-ms-hyphenate-limit-chars: 85%;'
    ]);
  });
});
