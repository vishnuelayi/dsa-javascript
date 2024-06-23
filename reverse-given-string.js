// Write a JavaScript program to reverse a given string.

function reverse(word) {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + word[i];
  }
  return reversedWord;
}

const inputString = "margin";

const result = reverse(inputString);

console.log(result);
