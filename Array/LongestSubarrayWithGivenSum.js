let arr = [10, 5, 2, 7, 1, 9];
let target = 15;

function longest(arr, target) {
  let max = 0;
  let sum = 0;
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === target) {
      max = i + 1;
    }

    if (map.has(sum - target)) {
      max = Math.max(max, i - map.get(sum - target));
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return max;
}

console.log(longest(arr, target));
