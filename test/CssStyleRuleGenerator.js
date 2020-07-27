const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStyleRuleGenerator = require('../lib/CssStyleRuleGenerator');

describe('CssStyleRuleGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS style rule', () => {
    expect(new CssStyleRuleGenerator().take(10)).toEqualSnapshot([
      ':focus { border-inline-start-style: double; border-inline: thin black; padding-inline-end: 0%; border-inline-start-color: #9c954d; list-style-position: inside; }',
      '.ted { column-rule: hidden double double medium thin 884.4036vw hsla(-4665270404644864 69% 61%); }',
      '::after { text-indent: hanging -584.1167px each-line; }',
      '.ziwiwwuh { mask-border-repeat: stretch; }',
      '#ejjitluh { margin-inline: 604.394em; block-size: fit-content(20%); column-rule-color: rgb(71% 73% 79% 77% 61%); text-transform: uppercase; }',
      '::first-letter ~ ::backdrop { display: run-in; outline-style: dotted double dashed; vertical-align: bottom; }',
      ':scope { border-top-style: dotted; backdrop-filter: blur(-596.5616ch); text-decoration-thickness: -371.2881px; }',
      ':link { border-image:  60%; overscroll-behavior-block: contain; text-underline-offset: -408.7326Q; border-block-start-style: inset; border-inline-start-width: thick; }',
      ':first-child { text-decoration-thickness: from-font; }',
      '::first-letter { border-top-color: hsla(-986.0958deg , 53% , 48%); overscroll-behavior: contain; }',
    ]);
  });

  describe('when shrinking', function () {
    it('should shrink', function () {
      const generator = new CssStyleRuleGenerator();
      expect(generator).toShrinkTowards(
        ':focus { border-block-start: inset; }'
      );
    });

    it('should honor the declarationList setting of the original generator', function () {
      const generator = new CssStyleRuleGenerator({
        declarationList: {
          min: 2,
        },
      });
      expect(generator).toShrinkTowards(
        ':focus { mask-repeat: repeat-x; empty-cells: hide; }'
      );
    });
  });
});
