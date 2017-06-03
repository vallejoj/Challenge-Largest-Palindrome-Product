/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {


  var factor_0 = 10;
  var factor_1 = 10;

  var palindromeNumber = 0;


  for (var i = 10; i < 99; i++) {
    for (var j = 10; j < 99; j++) {
      factor_0 = i;
      factor_1 = j;



    if (palindromeArray[0] === palindromeArray[3] &&
      palindromeArray[1] === palindromeArray[2]) {
      var digits = palindromeArray.join('');
      palindromeNumber = digits;
      console.log(palindromeNumber);
      console.log(digits)
    } else {
      palindromeNumber = factor_0 * factor_1;
      var palindromeArray = ('' + palindromeNumber).split('');
    }
}
  }
  }




  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
