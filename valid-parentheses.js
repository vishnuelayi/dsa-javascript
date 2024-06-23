//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//determine if the input string is valid.

function isValid(inputString) {
  let stackArray = [];
  let compare = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  for (ch of inputString) {
    if (compare[ch]) {
      if (
        stackArray.length !== 0 &&
        stackArray[stackArray.length - 1] === compare[ch]
      ) {
        stackArray.pop();
      } else {
        return false;
      }
    } else {
      stackArray.push(ch);
    }
  }
  return stackArray.length === 0;
}

const inputString = "(]";
const result = isValid(inputString);
console.log(result);
