let arr = [-3, 0, 2, 6, 17, 88, 100];
let x = 8;

function binarySearch(arr, x) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch(arr, x));
