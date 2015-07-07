var calculator = require('../calculator.js')

describe('#addition', function () {
  it ('returns the sum of the numbers in a string', function () {
    expect(calculator.addition('5+7+9')).toEqual(21);
  });
})
