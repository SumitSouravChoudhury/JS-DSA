let arr = [2, 3, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9, 9];

function removeDuplicates(arr) {
  let j = 0;
  arr[j++] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[j++] = arr[i];
    }
  }

  arr.length = j;
  return arr;
}

console.log(removeDuplicates(arr));
