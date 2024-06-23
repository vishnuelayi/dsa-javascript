// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".


function longestCommonPrefix(inputArray) {
  if (inputArray.length === "") return "Input array is empty";

  let prefix = inputArray[0];

  for (i = 1; i < inputArray.length; i++) {
    while (inputArray[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}

const inputArray = ["flower", "flow", "flight"];

const result = longestCommonPrefix(inputArray);

console.log(result);
