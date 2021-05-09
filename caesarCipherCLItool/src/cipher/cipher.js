const MIN_CASE_CHAR = 97;
const MAX_CASE_CHAR = 122;
const MIN_UPPER_CASE_CHAR = 65;
const MAX_UPPER_CASE_CHAR = 90;
const MAX_SHIFT = 26;

function isValidChar(char) {
  if ((char >= MIN_CASE_CHAR && char <= MAX_CASE_CHAR)
    || (char >= MIN_UPPER_CASE_CHAR && char < MAX_UPPER_CASE_CHAR)) return true;
  return false;
}

function getCipher(str, userShift) {
  let result = '';
  let shift;
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
