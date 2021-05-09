const MIN_CASE_CHAR = 97;
const MAX_CASE_CHAR = 122;
const MIN_UPPER_CASE_CHAR = 65;
const MAX_UPPER_CASE_CHAR = 90;

module.exports = function isValidChar(char) {
  if ((char >= MIN_CASE_CHAR && char <= MAX_CASE_CHAR)
      || (char >= MIN_UPPER_CASE_CHAR && char < MAX_UPPER_CASE_CHAR)) return true;
  return false;
};
