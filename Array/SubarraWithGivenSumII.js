let arr = [-5, 8, -14, 2, 4, 12];
let target = 0;

function subarrayWithGivenSum(arr, target) {
  let map = new Map();
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === target) {
      return arr.slice(0, i + 1);
    }

    if (map.has(sum - target)) {
      let start = map.get(sum - target) + 1;
      return arr.slice(start, i + 1);
    }

    map.set(sum, i);
  }

  return [];
}

console.log(subarrayWithGivenSum(arr, target));
