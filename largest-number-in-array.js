// Write a function to find the longest number in a given array.

function largest(array) {
  let largest = array[0];

  for (let i = 1; i <= array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}


const inputArray = [14, 34, 12, 53, 24]

const result = largest(inputArray);

console.log(result);