const { NotImplementedError } = require('../extensions/index.js');


  // const depthCalc = new DepthCalculator();
  // depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
  // depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
  // depthCalc.calculateDepth([[[]]]) => 3
 
 
class DepthCalculator {
  calculateDepth(array) {
      let k = 0;
      k += 1;
      for(let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
          let resultArray = array.flat();
          k += this.calculateDepth(resultArray);
          break;
        }
      }
      return k;
  }
}

module.exports = {
  DepthCalculator
};
