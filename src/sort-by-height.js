const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let copy = [];
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] != -1) {
          copy.push(arr[i]);
      }  
  }
  let newArr = copy.sort(function(a, b) { return a - b; });
  let resArr = [];
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == -1) {
          resArr.push(-1);
      } else {
          n += 1;
          resArr.push(newArr[n - 1]);
      }
  }
  return resArr;
}

module.exports = {
  sortByHeight
};
