let arr = [2, 4, 1, -5, 1, -3, -4, 4];

function subarrayWithZeroSum(arr) {
  let count = 0;
  let sum = 0;
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] === 0) {
      count++;
    }

    if (sum === 0) {
      count++;
    }

    if (set.has(sum)) {
      count++;
    }

    set.add(sum);
  }

  return count;
}

console.log(subarrayWithZeroSum(arr));
