# css-generators

[![Build Status](https://github.com/papandreou/css-generators/actions/workflows/ci.yml/badge.svg)](https://github.com/papandreou/css-generators/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/papandreou/css-generators/badge.svg?branch=master)](https://coveralls.io/github/papandreou/css-generators?branch=master)

CSS generator based on [chance-generators](https://github.com/sunesimonsen/chance-generators/), intended for use in property based tests with [unexpected-check](https://unexpected.js.org/unexpected-check/).

```js
const { stylesheet } = require('css-generators');

const cssString = stylesheet().first();

console.log(cssString);
```

Output 🤮 (pretty-printed):

```css
@keyframes 'naci' {
  from {
    background-color: teal;
  }
}
code {
  border-inline-start-style: groove;
  align-items: stretch;
  column-rule: dashed solid ridge hidden thin thick medium;
  grid-template-areas: none;
  transform-style: preserve-3d;
}
:nth-last-child(even) {
  border-top-left-radius: 366.5271cm 84%;
}
#lef {
  place-items: stretch;
  margin-inline-end: 939.1693vmax;
  rotate: -209.6995turn;
  text-transform: lowercase;
}
::first-line {
  mask-border-repeat: stretch;
}
#ejjitluh {
  margin-inline: 604.394em;
  block-size: fit-content(20%);
  column-rule-color: rgb(71% 73% 79% 77% 61%);
  text-transform: uppercase;
}
::first-letter ~ ::backdrop {
  display: run-in;
  outline-style: dotted double dashed;
  vertical-align: bottom;
}
:scope {
  border-top-style: dotted;
  backdrop-filter: blur(-596.5616ch);
  text-decoration-thickness: -371.2881px;
}
:link {
  border-image: 60%;
  overscroll-behavior-block: contain;
  text-underline-offset: -408.7326q;
  border-block-start-style: inset;
  border-inline-start-width: thick;
}
:first-child {
  text-decoration-thickness: from-font;
}
::first-letter {
  border-top-color: hsla(-986.0958deg, 53%, 48%);
  overscroll-behavior: contain;
}
:first-of-type {
  border-inline-width: medium;
  overscroll-behavior-y: none;
  background-position: -5.503rem;
  column-rule-width: thick thin;
  white-space: pre-wrap;
}
* {
  color: ButtonShadow;
}
:not(aji|*
    .
    femwaser
    ::dawmem
    ( 351.3803mm ):hepazpig:je
    ( invert )
    ::fow
    ( normal ):fe
    ( bel, erosi, 'hi', sans-serif ))
  > ::first-letter {
  scroll-margin-block: 5.2742q;
  mask-border-source: repeating-linear-gradient(
    darkgreen 766.9881mm 96% 57%,
    currentcolor,
    currentcolor,
    #efa7d6 9% 342.287vw
  );
  float: left;
}
:link {
  counter-set: none;
  overscroll-behavior-inline: contain;
  padding-block: 29%;
  scroll-margin-inline-start: 620.2268ex;
  shape-outside: margin-box inset(80%);
}
::cue-region(.dinbel) {
  margin-inline: 181.6665vmax -925.3037ch;
}
::after {
  margin-block-start: 655.738vh;
  clip: rect(-85.4697cm, -896.6366em, -177.2922px, 274.8598em);
}
```

## Example usage with unexpected-check

Check that
[cssnano](https://github.com/kangax/cssnano) always produces shorter output:

```js
const cssnano = require('cssnano');
const postcss = require('postcss');
const { stylesheet } = require('css-generators');
const expect = require('unexpected').clone().use(require('unexpected-check'));

expect.addAssertion(
  '<string> to be shorter than <string>',
  (expect, subject, value) => {
    expect(subject.length, 'to be less than', value.length);
  }
);

return expect(
  async (css) => {
    const result = await cssnano.process(postcss.parse(css), {
      from: undefined,
    });
    expect(result.css, 'to be shorter than', css);
  },
  'to be valid for all',
  stylesheet()
);
```

At the moment this immediately crashes cssnano by coming up with input that it doesn't support:

<!-- evaldown cleanStackTrace:true -->

```output
Found an error after 10 iterations, 7 additional errors found.
counterexample:

  Generated input: ':read-only { text-decoration-line: none; word-wrap: normal; }\n::backdrop { hanging-punctuation: last force-end first; border-inline-start: dotted; margin-bottom: -670.3704cm; }\n::slotted(: wupgoj ( left ) ::gozerza ( repeat fill 39% / -666.2298mm ):pipcan) { mask-border: round none -7619040671432704 3520295415578624 / 52%; }\n:first-of-type { border-top-style: dashed; background-origin: content-box; quotes: \'tatoaf\' \'uvlonsef\'; }\n'
  with: stylesheet({
    minAtRules: 0, maxAtRules: 3,
    atRules: { type: [ '@font-face', '@charset', '@keyframes' ] },
    minStyleRules: 1, maxStyleRules: 20, styleRules: {},
    experimental: false
  })

  Error: Expected a pseudo-class or pseudo-element.
      at /path/to/file.js:x:y
      at Root._error (/path/to/file.js:x:y)
```
