// 0 1 1 2 3 5 8

// normal approach

// var fib = function (n) {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr[n];
// };


// using recursion
var fib = function (n) {
  if (n === 1 || n === 0) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6));
