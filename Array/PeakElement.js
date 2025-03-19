let arr = [1, 2, 1, 3, 5, 6, 4];

function peakElement(arr) {
  let low = 0,
    high = arr.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > arr[mid + 1]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

console.log(peakElement(arr));
