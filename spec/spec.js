var calculator = require('../calculator.js')

describe('#addition', function () {
  it ('returns the sum of the numbers in a string', function () {
    expect(calculator.addition('5+7+9')).toEqual(21);
  });
})

describe('#subtraction', function () {
  it ('returns the result of subtracting', function () {
    expect(calculator.subtraction('88-4-12')).toEqual(72);
  });
})

describe('#multiplication', function () {
  it ('returns the product of multiplying the numbers in a given string', function () {
    expect(calculator.multiplication('14*9*2')).toEqual(252);
  });
})

describe('#division', function () {
  it ('returns the quotient after dividing numbers in a string', function () {
    expect(calculator.division('44/11')).toEqual(4);
  });
})

describe('#arithmetic', function () {
  it('returns the result of performing the arithmetic operations in a given string', function () {
    expect(calculator.arithmetic('60+6/3-7*3')).toEqual(41);
  });
})
