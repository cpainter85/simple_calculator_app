var calculator = {
  addition: function (string) {
    return string.split('+').reduce(function (prev, current) {
      return Number(prev) + Number(current);
    })
  },
  subtraction: function (string) {
    return string.split('-').reduce(function (prev, current) {
      return Number(prev) - Number(current);
    })
  },
  multiplication: function (string) {
    return string.split('*').reduce(function (prev, current) {
      return Number(prev) * Number(current);
    })
  },
  division: function (string) {
    return string.split('/').reduce(function (prev, current) {
      return Number(prev) / Number(current);
    })
  },
  arithmetic: function (string) {
    var subString = string.split('-');

    subString.forEach(function (subPart, index) {
      var addString = subPart.split('+');

      addString.forEach(function (addPart, i) {
        var multString = addPart.split('*');

        multString.forEach(function (multPart, j) {
          multString[j] = this.division(multPart);
        }.bind(calculator));

        addString[i] = this.multiplication(multString.join('*'))
      }.bind(calculator));

      subString[index] = this.addition(addString.join('+'))
    }.bind(calculator));

    return this.subtraction(subString.join('-'));
  }
}

module.exports = calculator;
