let prices1 = [7, 1, 5, 3, 6, 4];
let prices2 = [7, 6, 4, 3, 1];

// brute force approach
// const maxProfit = function (p) {
//   let small = p[0];
//   let small_index = 0;

//   for (let i = 1; i < p.length; i++) {
//     if (small > p[i]) {
//       small = p[i];
//       small_index = i;
//     }
//   }

//   let big = p[small_index];
//   for (let i = small_index + 1; i < p.length; i++) {
//     if (big < p[i]) {
//       big = p[i];
//     }
//   }

//   return big - small;
// };

//another approach greedy algorithm
const maxProfit = function (p) {
  let min_stock = p[0];
  let max_profit = 0;
  for (let i = 1; i < p.length; i++) {
    if (min_stock > p[i]) {
      min_stock = p[i];
    }

    if (max_profit < p[i] - min_stock) {
      max_profit = p[i] - min_stock;
    }
  }

  return max_profit;
};

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
