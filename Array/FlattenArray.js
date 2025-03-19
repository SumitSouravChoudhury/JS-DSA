let arr = [1, [2, [3, [4, 5]], 6], 7];

// function flattenArray(arr) {
//   let stack = [...arr];
//   let result = [];

//   while (stack.length) {
//     let next = stack.pop();
//     if (Array.isArray(next)) {
//       stack.push(...next);
//     } else {
//       result.unshift(next);
//     }
//   }

//   return result;
// }

function flattenArray(arr) {
  let result = [];

  for (let i of arr) {
    if (Array.isArray(i)) {
      result = result.concat(flattenArray(i));
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(flattenArray(arr));
