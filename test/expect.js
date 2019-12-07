const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));

expect.addType({
  base: 'object',
  name: 'Generator',
  identify: v => v && v.isGenerator,
  inspect: (v, depth, output, inspect) => {
    output.jsFunctionName(v.generatorName);

    if (typeof v.options !== 'undefined') {
      output
        .text('(')
        .appendInspected(v.options)
        .text(')');
    }
  }
});

expect.addAssertion(
  '<Generator> to shrink towards <any>',
  (expect, subject, value) => {
    expect.errorMode = 'nested';

    let count = 0;
    const iterator = subject.values();
    while (iterator.isShrinkable && count < 100) {
      const value = iterator.next();
      iterator.shrink(value);
      count++;
    }

    if (count === 100) {
      expect.fail('Could not shrink in 100 iterations');
    }

    expect(iterator.next(), 'to equal', value);
  }
);

module.exports = expect;
