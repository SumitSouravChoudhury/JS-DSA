let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 4;
let n = arr.length;

function reverse(arr, low, high) {
  while (low < high) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    low++;
    high--;
  }
}

reverse(arr, 0, n - 1);
reverse(arr, 0, k - 1);
reverse(arr, k, n - 1);

console.log(arr);
