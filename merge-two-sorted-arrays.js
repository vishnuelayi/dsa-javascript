//Write a function to merge two arrays as sorted

function sortAndMerge(arr1, arr2) {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }

  sortedArray.push(...arr2.slice(j));
  sortedArray.push(...arr1.slice(i));

  return sortedArray;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6, 7];

const result = sortAndMerge(arr1, arr2);
console.log(result);
