let arr = [3, 2, 8, 4, 1, 5, 9, 6, 7];
let n = arr.length;

function merge(arr, low, mid, high) {
  let count = 0;
  let n1 = mid - low + 1;
  let n2 = high - mid;

  const left = new Array(n1);
  const right = new Array(n2);

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
      count += n1 - i;
    }
  }

  while (i < n1) {
    arr[k++] = left[i++];
  }
  while (j < n2) {
    arr[k++] = right[j++];
  }

  return count;
}

function inversionCount(arr, low, high) {
  let count = 0;
  if (low < high) {
    let mid = Math.floor(low + (high - low) / 2);

    count += inversionCount(arr, low, mid);
    count += inversionCount(arr, mid + 1, high);
    count += merge(arr, low, mid, high);
  }

  return count;
}

console.log(inversionCount(arr, 0, n - 1));
