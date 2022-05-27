//recursion method
function factorial(num) {
    if (num < 0) 
          return 'NaN';
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
  }
module.exports = {factorial}
