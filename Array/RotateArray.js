let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;

function reverse(arr, low, high) {
  while (low < high) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    low++;
    high--;
  }
}

reverse(arr, 0, arr.length - 1);
reverse(arr, 0, k - 1);
reverse(arr, k, arr.length - 1);

console.log(arr);
