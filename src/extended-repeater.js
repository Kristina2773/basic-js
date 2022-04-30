const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
 let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
 let str1 = '';
 let result = '';
   if (typeof str !== 'string' && str == addition && addition !== undefined && str !== null){
     str = 'STRING_OR_DEFAULT';
     addition = 'STRING_OR_DEFAULT';
   } else if (typeof str !== 'string' && str !== null) {
     str = str.toString();
   }
   let reg = /\s/g;
   if(str !== null){
     str = str.replace(reg, 'ё');
   }
   
   if(addition !== undefined && addition != 'STRING_OR_DEFAULT' && str !== null) {
     addition = addition.toString();
     addition = addition.replace(reg, "ё");
   }
   let addition1 = '';
   if(addition !== undefined && additionRepeatTimes !== undefined) {
     if (addition == null) {
       addition = 'null';
     } else {
       addition = addition.toString();
     }
     addition1 = (addition + ' ').repeat(+additionRepeatTimes);
   } else if (addition !== undefined) {
     addition1 = (addition + ' '); 
   }
   if(additionSeparator !== undefined) {
     additionSeparator.toString();
     additionSeparator = additionSeparator.replace(reg, 'ё');
   }
   if(additionSeparator !== undefined && addition !== undefined) {
     addition1 = addition1.split(' ');
     addition1.pop();
     addition1 = addition1.join(`${additionSeparator}`);
   } else if (addition !== undefined) {
     addition1 = addition1.split(' ');
     addition1.pop();
     addition1 = addition1.join('|');
   }
   let string = '';
   if(addition !== undefined) {
     string = ((str + addition1) + ' ');
   } else {
     string = str;
   }
   if(repeatTimes != undefined && addition !== undefined) {
     str1 = (string + '').repeat(+repeatTimes);
   } else if(repeatTimes != undefined) {
     str1 = (string + ' ').repeat(+repeatTimes);
   } else if(addition !== undefined) {
     str1 = string;
   }
   if(separator !== undefined) {
     result = str1.split(' ');
     let test = result.pop();
     result = result.join(`${separator}`);
   } else {
     result = str1.split(' ');
     result.pop();
     result = result.join('+');
   }
   let reg2 = /ё/g;
   result = result.replace(reg2, ' ');
   return result;
}

module.exports = {
  repeater
};
