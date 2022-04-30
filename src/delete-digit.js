const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let copy = n.toString().split('');
    let result = [];
    for(let i = 0; i < copy.length; i++) {
      let cn = n.toString().split('');
      cn.splice(i, 1);
      result.push(cn.join(''));
    }
    result = result.sort((a,b) => a-b);
    return +result[result.length - 1];
}

module.exports = {
  deleteDigit
};
