# css-generators

[![Build Status](https://travis-ci.org/papandreou/css-generators.svg?branch=master)](https://travis-ci.org/papandreou/css-generators)

[![Coverage Status](https://coveralls.io/repos/github/papandreou/css-generators/badge.svg?branch=master)](https://coveralls.io/github/papandreou/css-generators?branch=master)

CSS generator based on [chance-generators](https://github.com/sunesimonsen/chance-generators/), intended for use in property based tests with [unexpected-check](https://unexpected.js.org/unexpected-check/).

## Example with unexpected-check

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
Found an error after 1 iteration, 21 additional errors found.
counterexample:

  Generated input: '::slotted([ jimab | lel ] ::gemsibsof:ow) { contain: strict; }\n:target { block-size: fit-content(302.1541cm); text-orientation: sideways; scroll-padding-top: -338.204cm; background-position: center bottom; }\n::selection { list-style: symbols() none; overscroll-behavior: none; }\n:read-write { overscroll-behavior-y: auto; }\n[data=cuvbe] { border-block-end-style: solid; mask-border-width: auto; }\n:link { resize: both; border-start-end-radius: 62%; grid-template-rows: none; scroll-padding-inline-end: auto; border-left-style: double; }\n:in-range { border-image: cross-fade(40% image(rgb(-8550520868306944)) , cross-fade(41% url(fig))) fill 2885859288285184 / 8194124427558912 round; }\n'
  with: stylesheet({
    minAtRules: 0, maxAtRules: 3, atRules: { type: [ '@font-face', '@charset', '@keyframes' ] }, minStyleRules: 1, maxStyleRules: 20,
    styleRules: {}, experimental: false
  })

  TypeError: Cannot read property 'trim' of undefined
      at /path/to/file.js:x:y
      at /path/to/file.js:x:y)
```
