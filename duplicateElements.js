//Write a javascript function to sort the given number array and replace the duplicate numbers with "_"

function removeDuplicate(sortedArray) {
  for (let i = 0; i <= sortedArray.length-1 ; i++) {
    if (sortedArray[i] === "_") continue;
    for (let j = i + 1; j <= sortedArray.length - 1; j++) {
      if (sortedArray[i] === sortedArray[j]) {
        sortedArray[j] = "_";
      }
    }
  }

  return sortedArray;
}

const inputArray = [2, 4, 2, 5, 2, 1, 9];

const sortedArray = inputArray.sort((a, b) => a - b);

result = removeDuplicate(sortedArray);
console.log(result);
