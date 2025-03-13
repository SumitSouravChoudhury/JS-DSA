let arr = [2, 4, 1, 5, 6, 4];

function find(arr) {
  let n = arr.length;
  let missing = Math.floor((n * (n + 1)) / 2);
  let repeating = -1;

  let ans = [];

  for (let i = 0; i < n; i++) {
    let abs = Math.abs(arr[i]);

    if (arr[abs - 1] > 0) {
      arr[abs - 1] = -arr[abs - 1];
      missing -= abs;
    } else {
      repeating = abs;
    }
  }
  ans.push(missing, repeating);
  return ans;
}

console.log(find(arr));
