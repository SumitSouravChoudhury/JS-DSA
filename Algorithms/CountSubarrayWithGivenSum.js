let arr = [1, 6, 2, 5, 8, 7, 3, 2, 2];
let target = 7;

function countSubarray(arr, target) {
  let map = new Map();
  let sum = 0;
  let count = 0;

  map.set(0, 1);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (map.has(sum - target)) {
      count += map.get(sum - target);
    }

    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }

  return count;
}

console.log(countSubarray(arr, target));
