let arr = [1, 0, 0, 1, 1, 1, 0, 0, 0];

function subarrayWithEqual0and1(arr) {
  let sum = 0;
  let map = new Map();
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr[i] = -1;
    }

    sum += arr[i];

    if (sum === 0) {
      count++;
    }

    if (map.has(sum)) {
      count += map.get(sum);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

console.log(subarrayWithEqual0and1(arr));
