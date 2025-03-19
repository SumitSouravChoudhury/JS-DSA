let arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
let k = 3;

function maxSum(arr, k) {
  let max_sum = 0;
  let window_sum = 0;

  for (let i = 0; i < k; i++) {
    window_sum += arr[i];
  }

  max_sum = window_sum;

  for (let i = k; i < arr.length; i++) {
    window_sum += arr[i] - arr[i - k];

    max_sum = Math.max(max_sum, window_sum);
  }

  return max_sum;
}

console.log(maxSum(arr, k));
