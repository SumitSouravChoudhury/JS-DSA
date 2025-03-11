let arr1 = [1, 2, 4, 5, 6, 2, 9, 5, 8, 7];
let arr2 = [3, 4, 1, 7, 6, 10, 11, 2, 7, 9];

function intersection(arr1, arr2) {
  let set = new Set();
  let ans = [];

  for (let i of arr1) {
    set.add(i);
  }

  for (let i of arr2) {
    if (set.has(i)) {
      ans.push(i);
      set.delete(i);
    }
  }

  return ans;
}

console.log(intersection(arr1, arr2));
