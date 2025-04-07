// 1st approach
// const isAnagram = function (s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("");
// };

//2nd approach
// const isAnagram = function (s, t) {
//   // edge case
//   if (s.length !== t.length) {
//     return false;
//   }

//   let obj1 = {};
//   let obj2 = {};

//   for (let i = 0; i < s.length; i++) {
//     if (!obj1[s[i]]) {
//       obj1[s[i]] = 1;
//     } else {
//       obj1[s[i]]++;
//     }

//     if (!obj2[t[i]]) {
//       obj2[t[i]] = 1;
//     } else {
//       obj2[t[i]]++;
//     }
//   }
//   for (const key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

//2nd approach optimize
const isAnagram = function (s, t) {
  // edge case
  if (s.length !== t.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
