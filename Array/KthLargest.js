let arr = [2, 1, 8, 7, 4, 3, 9, 11, 16, 5];
let k = 4;
let n = arr.length;

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high; j++) {
    if (arr[j] > pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}

function findKLargest(arr, low, high, k) {
  if (low <= high) {
    let pi = partition(arr, low, high);

    if (pi === k - 1) {
      return arr[pi];
    } else if (pi > k - 1) {
      return findKLargest(arr, low, pi - 1, k);
    } else {
      return findKLargest(arr, pi + 1, high, k);
    }
  }

  return -1;
}

console.log(findKLargest(arr, 0, n - 1, k));
