const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStyleRuleGenerator = require('../lib/CssStyleRuleGenerator');

describe('CssStyleRuleGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS style rule', () => {
    expect(new CssStyleRuleGenerator().take(10)).toEqualSnapshot([
      ':future { border-inline-start-style: double; border-inline: thin aqua; user-select: contain; transform: none; border-inline-start-color: #9c954d; }',
      ':last-of-type { animation-direction: alternate; font-variant-caps: normal; column-rule: hidden double double medium thin 884.4036vw hsla(-4665270404644864 69% 61%); }',
      ':visited { text-indent: hanging -584.1167pt each-line; }',
      '#ziwiwwuh { mask-border-repeat: stretch; }',
      '* { cursor: url(jitluh) -448.0017cm 604.394cm none; word-break: break-all; font-variant: normal; align-content: normal; border-left-width: medium; }',
      ':scope { background-size: cover; border-bottom-color: currentcolor; grid-template-areas: none; background-image: none; }',
      ':first { mask-mode: alpha; mask: url(wic) subtract margin-box; content: none; overscroll-behavior: auto; }',
      ':default { margin-block-start: 885.7072ch; mask-repeat: repeat; text-underline-offset: -408.7326px; }',
      '::before ~ :target { gap: -755.8241vmin; }',
      ':first { clip-path: url(luh); }',
    ]);
  });

  describe('when shrinking', function () {
    it('should shrink', function () {
      const generator = new CssStyleRuleGenerator();
      expect(generator).toShrinkTowards(
        ':future { border-inline-start-color: #9c954d; }'
      );
    });

    it('should honor the declarationList setting of the original generator', function () {
      const generator = new CssStyleRuleGenerator({
        declarationList: {
          min: 2,
        },
      });
      expect(generator).toShrinkTowards(
        ':future { border-inline: thin aqua; border-inline-start-color: #9c954d; }'
      );
    });
  });
});
