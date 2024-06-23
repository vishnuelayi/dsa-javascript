function factorial(num) {
  if (num === 0) {
    return 1;
  }
 return num * factorial(num - 1);
}


const number = 9
const result = factorial(number)
console.log(result);