const Generator = require('chance-generators/lib/Generator');
const _ = require('lodash');

class SvgPathGenerator extends Generator {
  constructor({ min = 2, max = 20 } = {}) {
    super('svgPath', { min, max });
  }

  generate(chance) {
    const count = chance.integer({
      min: this.options.min,
      max: this.options.max
    });
    const commands = _.range(count).map(
      () =>
        `${chance.pickone(['M', 'Q', 'L'])} ${chance.integer({
          min: -100,
          max: 100
        })},${chance.integer({ min: -100, max: 100 })}`
    );
    return commands.join(' ');
  }
}

module.exports = SvgPathGenerator;
