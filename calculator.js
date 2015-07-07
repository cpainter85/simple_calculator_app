var calculator = {
  addition: function (string) {
    return string.split('+').reduce(function (sum, current) {
      return sum+Number(current);
    },0)
  }
}

module.exports = calculator;
