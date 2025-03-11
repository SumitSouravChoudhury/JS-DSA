let arr = [1, 5, 3, 2, 2, 1, 5, 3, 9];

function findRepeating(arr) {
  let map = new Map();
  let ans = -1;

  for (let a = arr.length - 1; a >= 0; a--) {
    if (map.has(arr[a])) {
      ans = arr[a];
      map.set(arr[a], map.get(arr[a]) + 1);
    } else {
      map.set(arr[a], 1);
    }
  }

  return ans;
}

console.log(findRepeating(arr));
