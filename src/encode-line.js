const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = str.split('');
    let result = [];
    let k = 0;
    for(let i = 0; i < array.length; i++) {
      if(array[i] == array[i+1]){
        k++;
        continue;
      } else if(array[i] != array[i+1] && k >= 1){
          result.push(`${k+1}${array[i]}`);
          k = 0;
      } else if(array[i] != array[i+1] && k == 0) {
          result.push(`${array[i]}`)
          k = 0;
      }
    }
    return result.join('');
}

module.exports = {
  encodeLine
};
