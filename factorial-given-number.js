function factorial(num) {
  let factorial = 1;
  for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

const number = 5;
const result = factorial(number);
console.log(result);
