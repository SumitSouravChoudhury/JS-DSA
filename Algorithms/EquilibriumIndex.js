let arr = [6, 4, 3, 6, 4, -1, 1];

function findEquilibrium(arr) {
  let left_sum = 0,
    total_sum = 0;

  for (let i = 0; i < arr.length; i++) {
    total_sum += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    total_sum -= arr[i];

    if (total_sum === left_sum) {
      return i + 1;
    }

    left_sum += arr[i];
  }

  return -1;
}

console.log(findEquilibrium(arr));
