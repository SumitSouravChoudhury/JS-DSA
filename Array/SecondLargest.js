let arr = [2, 6, 1, 8, -1, 99, 12];

function secondLargest(arr) {
  let largest = Number.MIN_VALUE,
    sLargest = Number.MIN_VALUE;

  for (let i of arr) {
    if (i > largest) {
      largest = i;
    }

    if (i > sLargest && i !== largest) {
      sLargest = i;
    }
  }

  return sLargest;
}

console.log(secondLargest(arr));
