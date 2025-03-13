let arr = [[], [], [], []];
let x = 2;

let m = arr.length;
let n = arr[0].length;

let high = m * n - 1;

function searchIn2D(arr, low, high, x) {
  let n = arr.length;

  while (low <= high) {
    let mid = Math.floor((high - low) / 2);
    let row = Math.floor(mid / n);
    let col = Math.floor(mid % n);

    if (arr[row][col] === x) {
      return true;
    } else if (arr[row][col] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}

console.log(searchIn2D(arr, 0, high, x));
