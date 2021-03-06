const cssGenerators = require('..');
const expect = require('./expect');

describe('css-generators', function () {
  it('should expose generator facades', function () {
    expect(cssGenerators.namedSyntax('font-weight').take(5)).toEqualSnapshot([
      'bolder',
      'bolder',
      'lighter',
      'lighter',
      'normal',
    ]);
  });
});
