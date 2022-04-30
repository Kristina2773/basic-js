const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let reg = /@([\w-]+\.)+[\w-]+/
  let match = email.match(reg);
  return match[0].slice(1);
}

module.exports = {
  getEmailDomain
};
