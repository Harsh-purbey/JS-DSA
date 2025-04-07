// brute force approach
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// this approach not works
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] + nums[i + 1] === target) return [i, i + 1];
//   }
// };

// another optimize approach
// const twoSum = function (nums, target) {

//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     let temp = target - nums[i];
//     obj[nums[i]] = i;

//     if (nums.includes(temp)) {
//       if (obj[temp] !== undefined) {
//         obj[nums[i]] = [obj[temp], i];
//       }
//     }
//   }

//   for (const key in obj) {
//     if (isNaN(obj[key])) {
//       return obj[key];
//     }
//   }

// };

// optimize
const twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] >= 0) {
      return [obj[target - nums[i]], i];
    } else {
      obj[nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
