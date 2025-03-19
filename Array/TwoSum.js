let arr = [2, 7, 11, 15];
let target = 9;

function twoSum(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(target - arr[i])) {
      return [map.get(target - arr[i]), i];
    }
    map.set(arr[i], i);
  }

  return [];
}

console.log(twoSum(arr, target));
