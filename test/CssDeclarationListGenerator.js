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
      'scroll-margin-inline-start: 901.4287em; perspective-origin: top -688.011cm left 732.3523mm;',
      'border-end-end-radius: 65%; animation-delay: -887.1769s; page-break-after: recto; transform-box: border-box;',
      'border-inline-end-color: ButtonHighlight;',
      'column-count: auto; inset-inline-start: -136.11ch; clip: auto; mask-origin: fill-box;',
      'background: padding-box right / contain repeat-x rgb(7965998619557888 , 81%) fixed left border-box;',
      'border-top: hsla(-5884139412652032 , 91% , 39%) 325.0446vh; column-rule: double -937.3735vw; scroll-snap-align: center; grid-auto-columns: fit-content(789.6547vmin);',
      'page-break-inside: avoid; column-width: 140.888em; inset-inline-end: 922.3441in;',
      "font-feature-settings: 'ene' 22%; letter-spacing: normal; border-end-end-radius: 604.394em; background-size: auto; font-variant-caps: unicase;",
      'border-inline-start-width: thin; align-content: normal;',
      'border-inline-start-width: medium; padding-left: 79%; scrollbar-width: thin; background-size: contain; flex: auto;'
    ]);
  });
});
