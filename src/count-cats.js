const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let k = 0;
  let arr = matrix.flat();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '^^') {
      k += 1;
    } else {
      continue;
    }
  }
  return k;
}

module.exports = {
  countCats
};
