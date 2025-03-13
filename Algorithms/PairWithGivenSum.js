let arr = [1, 1, 1, 1];
let sum = 2;

function findPairWithGivenSum(arr, sum) {
  let count = 0;
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(sum - arr[i])) {
      count += map.get(sum - arr[i]);
    }

    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  return count;
}

console.log(findPairWithGivenSum(arr, sum));
