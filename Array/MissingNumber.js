let arr = [2, 1, 4, 6, 7, 8, 9, 3];
let n = arr.length + 1;

function missingNumber(arr) {
  let sum = (n * Math.floor(n + 1)) / 2;

  let actual_sum = 0;
  for (let i of arr) {
    actual_sum += i;
  }
  return sum - actual_sum;
}

console.log(missingNumber(arr));
