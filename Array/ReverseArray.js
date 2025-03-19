let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverseArray(arr) {
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

  return arr;
}

console.log(reverseArray(arr));
