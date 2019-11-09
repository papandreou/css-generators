const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const SvgPathGenerator = require('../lib/SvgPathGenerator');

describe('SvgPathGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS declaration list', () => {
    expect(new SvgPathGenerator().take(10), 'to equal snapshot', [
      'L 91,-64 L 56,20 Q -69,-11 M -80,-89 Q 74,-33 Q -72,42 Q -96,-89 L 45,67 L -58,-100',
      'L -64,24 M 22,5 M -14,-96 M 5,22 Q -72,-91',
      'L -27,-54 Q -82,57 Q -60,-24 Q 97,19 Q -91,72 Q 36,-66 Q -87,-98',
      'L 94,13 L -23,-39 M -81,-54 L -52,-12 L -76,22 Q 67,-94 M 82,-22 M -64,33 L -38,-15 Q -59,9 Q -63,-94 L 69,55 Q 88,-21 L 86,20 L 85,-35 M 14,-61 Q -91,93 M 69,-22 L -46,8 L 17,-29',
      'M 22,9 M -72,-41 L -67,-86 M 98,-15 L -21,-61 M -99,-98 L -61,42 L 46,58 L 21,-86 L -28,30 M 83,73 L 25,-10 M -81,-88 Q -38,34 M 33,46 Q 28,-45 L 12,-6 Q -76,95 L 70,52 L 12,-53',
      'M -1,-92 Q 42,-15 M -95,-12 M -60,-94 L 27,-5 M 13,2 L 82,-72 M 21,-18 Q 51,-60 M 89,-85 Q -42,39 M 76,86 Q 62,-41 Q -79,75 Q 61,-57 M -17,79',
      'Q -35,62 M 80,-29 M 82,-78 M -55,30 Q -100,64 Q 73,-39 M -67,2 Q -17,-3 M 39,-76 M -33,-51 L -67,-36 M 4,12 L -19,-27 M 95,-49 L -51,-50 L -1,43 M -71,-43 L -93,-47',
      'L 1,-18 M -94,-44 Q 82,27 M 36,-71 Q -2,-10 L 11,-52 Q 35,-84 L -26,-53 M 46,61 Q -6,27 L 27,-20 Q 64,-82 L 67,-70',
      'Q -63,39 M 72,18 M 36,-56 M 42,2 L -55,-30 Q -81,-65 L 38,-21 Q 4,88',
      'M 35,-32 L -78,-58 L 8,76 L -49,-55 Q -65,64 L 11,3 Q -48,-52 L -82,94 L 12,80 L 27,-63 Q -44,-30 L 45,70 L 72,78 Q 56,78 Q 71,-84 L -68,57 L 34,21'
    ]);
  });
});
