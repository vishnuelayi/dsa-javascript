function fib(num) {
  if (num < 0) {
    console.log("Invalid Number");
  }
  let fibo = [0, 1];
  for (i = 2; i < num; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }
  console.log(fibo);
}

const inputNumber = 5;
fib(inputNumber);
