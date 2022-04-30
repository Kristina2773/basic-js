const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  resultArray: [],
  getLength() {
    return this.resultArray.length;
  },
  addLink(value) {
    if (value != undefined || value == null) {
      this.resultArray.push('( ' + value + ' )');
    } else {
      this.resultArray.push(' ');
    }
    return this;
  },
  removeLink(position) {
    if (typeof position == 'number' && Number.isInteger(position) === true && position >= 1 && position <= this.resultArray.length - 1) {
      this.resultArray.splice(position - 1, 1);
    } else {
      this.resultArray = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    return this;
  },
  reverseChain() {
    this.resultArray.reverse();
    return this;
  },
  finishChain() {
    let copyArray = this.resultArray.join('~~');;
    this.resultArray = [];
    return copyArray;
  }
};

module.exports = {
  chainMaker
};
