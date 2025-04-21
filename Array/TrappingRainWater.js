let arr = [4, 2, 0, 3, 2, 5];

function calculateRainWater(arr) {
  let l = 0,
    r = arr.length - 1;

  let leftMax = 0,
    rightMax = 0;
  let res = 0;

  while (l <= r) {
    if (arr[l] <= arr[r]) {
      if (arr[l] >= leftMax) {
        leftMax = arr[l];
      } else {
        res += leftMax - arr[l];
      }
      l++;
    } else {
      if (arr[r] >= rightMax) {
        rightMax = arr[r];
      } else {
        res += rightMax - arr[r];
      }
      r--;
    }
  }

  return res;
}

console.log(calculateRainWater(arr));
