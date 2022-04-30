const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members == null || members == undefined || typeof(members) == 'numbers') {
    return false;
  } 
  let names = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) == 'string') {
      let people = members[i].split('');
      console.log(people);
      for(let j = 0; j < people.length; j++) {
        if(people[j] != ' ') {
          names.push(people[j].toUpperCase());
          j = people.length;
        }
      }
    } 
  }
  names.sort();
  return names.join('');

}

module.exports = {
  createDreamTeam
};
