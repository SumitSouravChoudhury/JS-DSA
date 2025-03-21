let arr = [2, 5, 1, 6, 7, 9, 8, 5, 4];

function merge(arr, low, mid, high) {
  let n1 = mid - low + 1;
  let n2 = high - mid;

  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    left[i] = arr[low + i];
  }
  for (let i = 0; i < n2; i++) {
    right[i] = arr[mid + 1 + i];
  }

  let i = 0,
    j = 0,
    k = low;

  while (i < n1 && j < n2) {
    if (left[i] < right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
    }
  }

  while (i < n1) {
    arr[k++] = left[i++];
  }
  while (j < n2) {
    arr[k++] = right[j++];
  }
}

function mergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor(low + (high - low) / 2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);

    merge(arr, low, mid, high);
  }
}

mergeSort(arr, 0, arr.length - 1);

console.log(arr);
