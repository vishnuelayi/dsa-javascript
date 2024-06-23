// Write a JavaScript function to check if a given string is a palindrome

function isPaliandrome(word) {
  const cleanString = word.toLowerCase();

  let left = 0;
  let right = cleanString.length - 1;

  while (left < right) {
    if (cleanString[left] !== cleanString[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const inputString = "abba";
if (isPaliandrome(inputString))
{
    console.log(`${inputString} is a paliandrome`);
}
else{
    console.log("This word is not a paliandrome");
}
