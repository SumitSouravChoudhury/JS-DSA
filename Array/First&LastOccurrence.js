let arr = [2, 1, -1, 8, 4, 1, 8, 5, 9, 0, 1, 10];
let x = 1;

function firstAndLastOccurrence(arr, x) {
  let first = -1;
  let last = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      if (first === -1) {
        first = i;
      }
      last = i;
    }
  }

  return [first, last];
}

console.log(firstAndLastOccurrence(arr, x));
