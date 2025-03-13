let arr = [2, 6, 3, 5, 8, 9, 3, 2, 2];
let target = 7;

function subarrayWithGivenSum(arr) {
  let sum = arr[0];
  let start = 0;
  let ans = [];

  for (let i = 1; i <= arr.length; i++) {
    while (sum > target && start < i - 1) {
      sum -= arr[start];
      start++;
    }

    if (sum === target) {
      ans.push(start);
      ans.push(i - 1);
    }

    if (i < arr.length) {
      sum += arr[i];
    }
  }

  return ans;
}

console.log(subarrayWithGivenSum(arr));
