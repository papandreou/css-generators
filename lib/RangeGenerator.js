const Generator = require('chance-generators/lib/Generator');
const _ = require('lodash');

class RangeGenerator extends Generator {
  constructor(generatorOrString, range) {
    let min, max;
    if (range) {
      ({ min, max } = range);
      if (min === undefined) {
        min = 1;
      }
      if (max === undefined) {
        max = min + 2;
      }
    } else {
      min = max = 1;
    }
    super('range', { min, max, generatorOrString });
  }

  generate(chance) {
    const { min, max, generatorOrString } = this.options;

    return _.range(chance.integer({ max, min }))
      .map(() =>
        typeof generatorOrString === 'string'
          ? generatorOrString
          : generatorOrString.generate(chance)
      )
      .join(' ');
  }
}

module.exports = RangeGenerator;
