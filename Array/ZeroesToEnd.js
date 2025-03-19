let arr = [2, 0, -1, 6, 0, 0, 5, 7, 8, 9, 0];
let n = arr.length;

function moveZeroesToEnd(arr) {
  let j = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      arr[j++] = arr[i];
    }
  }

  while (j < n) {
    arr[j++] = 0;
  }

  return arr;
}

console.log(moveZeroesToEnd(arr));
