let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function spiralMatrix(arr) {
  let m = arr.length;
  let n = arr[0].length;

  let ans = [];

  let top = 0,
    left = 0,
    right = n - 1,
    bottom = m - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      ans.push(arr[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      ans.push(arr[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(arr[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(arr[i][left]);
      }
      left++;
    }
  }

  return ans;
}

console.log(spiralMatrix(arr));
