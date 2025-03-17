let arr = [2, 6, 3, 5, 8, 9, 3, 2, 2];
let target = 7;

function subarrayWithGivenSum(arr) {
  let sum = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum > target && start <= i) {
      sum -= arr[start];
      start++;
    }

    if (sum === target) {
      return [start, i];
    }
  }

  return [-1, -1];
}

console.log(subarrayWithGivenSum(arr));
