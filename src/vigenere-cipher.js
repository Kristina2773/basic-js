const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (checkReverse = true) {
    this.checkReverse = checkReverse;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encode (word) {
    let listCode = [];
    word = word.toUpperCase();
    for(let i = 0; i < word.length; i++) {
      for(let j = 0; j < this.alphabet.length; j++) {
        if (word[i] == this.alphabet[j]) {
          listCode.push(j);
        } 
      }
    }
    return listCode;
  }
  
  compare(value, key) {
    let obj = {};
    let iter = 0;
    let full = 0;
  
    for (let i = 0; i < value.length; i++) {
      obj[full] = [value[i], key[iter]];
      full += 1;
      iter += 1;
      if (iter >= key.length) {
        iter = 0;
      }
    }
    return obj;
  }
  
  fullEncode(value, key) {
    let obj = this.compare(value, key);
    let list = [];
    for (let i in obj) {
      let s = (obj[i][0]+obj[i][1]) % this.alphabet.length;
      list.push(s);
    }
    return list;
  }
  
  decodeValue(listIn, word) {
    this.alphabet.split('');
    word = word.toUpperCase();
    word = word.split('');
    let listCode = [];
    let resultArr = [];
  
    for(let i = 0; i < listIn.length; i++) {
      for(let j = 0; j < this.alphabet.length; j++) {
        if(listIn[i] == j) {
          listCode.push(this.alphabet[j]);
        }
      }
    }
    let k = 0;
    for(let i = 0; i < word.length; i++) {
        if(this.alphabet.includes(word[i])) {
          resultArr.push(listCode[k]);
          k+=1;
        } else {
          resultArr.push(word[i]);
        }
      
    }
    return (this.checkReverse) ? resultArr.join('') : resultArr.reverse().join('');
  }
  fullDecode(value, key) {
    let obj = this.compare(value, key);
    let list = [];
  
    for(let i in obj) {
      let go = (obj[i][0]- obj[i][1] + this.alphabet.length) % this.alphabet.length;
      list.push(go);
    }
    return list;
  }

  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    let keyEncoded = this.encode(key);
    let valueEncoded = this.encode(message);

    let shifre = this.fullEncode(valueEncoded, keyEncoded);
    let encoded = this.decodeValue(shifre, message);
    return encoded;
  }
  decrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    let keyEncoded = this.encode(key);
    let valueEncoded = this.encode(message);
    let decoded = this.fullDecode(valueEncoded, keyEncoded);
    let decodeWord = this.decodeValue(decoded, message);
    return decodeWord;
  }
}

module.exports = {
  VigenereCipheringMachine
};
