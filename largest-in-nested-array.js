function largest(array) {
  let largestNumber = -Infinity;

  for (let i = 0; i <= array.length - 1; i++) {
    let element = array[i];

    if (typeof element === "number") {
      largestNumber = Math.max(largestNumber, element);
    } else if (Array.isArray(element)) {
      let subLargest = largest(element);
      largestNumber = Math.max(largestNumber, subLargest);
    }
  }
  return largestNumber;
}

const inputArray = [23, [23, 53, 63], "hello", [84, 92, 73]];
const result = largest(inputArray);
console.log(result);
