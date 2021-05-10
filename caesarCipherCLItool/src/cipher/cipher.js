const isValidChar = require('../check/char');

const MAX_SHIFT = 26;

function getCipher(str, userShift) {
  let result = '';
  let shift = userShift;
  if (userShift > MAX_SHIFT || userShift < -MAX_SHIFT) shift = userShift % MAX_SHIFT;

  for (const val of str) {
    const char = val.charCodeAt();
    let newChar = char;

    if (isValidChar(char)) {
      newChar = char + shift;
      if (!isValidChar(newChar)) {
        newChar = shift > 0 ? char + shift - MAX_SHIFT : char + shift + MAX_SHIFT;
      }
    }

    result += String.fromCharCode(newChar);
  }

  return result;
}

module.exports = {
  getCipher
};
