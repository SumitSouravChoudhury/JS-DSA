let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSumSubarray(arr) {
  let sum = 0;
  let max_sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum < 0) {
      sum = 0;
    }

    if (max_sum < sum) {
      max_sum = sum;
    }
  }

  return max_sum;
}

console.log(maxSumSubarray(arr));
