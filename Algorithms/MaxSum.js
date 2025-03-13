let arr = [3, 4, 1, 5, 2];

function findPivot(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[(i + 1) % n]) {
      return i;
    }
  }

  return 0;
}

function maxSum(arr) {
  let n = arr.length;
  let pivot = findPivot(arr);
  let sum = 0;
  let diff = n - pivot - 1;

  for (let i = 0; i < n; i++) {
    sum = sum + ((diff + i) % n) * arr[i];
  }

  return sum;
}

console.log(maxSum(arr));
