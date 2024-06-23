
function sort(arr, key)
{
    const sortedArray = arr.sort((a,b) => a[key] - b[key])
    console.log(sortedArray);
}

const inputArray = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];

const result = sort(inputArray, "age");