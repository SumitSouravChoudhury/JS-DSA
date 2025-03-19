let arr = [5, 7, 9, 2, 3, 4];
let x = 2;

function search(arr, x) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) {
      return mid;
    }

    if (arr[low] <= arr[mid]) {
      if (arr[low] <= x && arr[mid] > x) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[high] >= x && arr[mid] < x) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
}

console.log(search(arr, x));
