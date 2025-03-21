let arr = [-1, 0, 1, 2, -1, -4];

function threeSum(arr) {
  arr.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let left = i + 1,
      right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        res.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;

        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
}

console.log(threeSum(arr));
