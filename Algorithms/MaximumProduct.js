let arr = [2, 1, 4, -1, 8, -9, 4, 6, 7];

function maximumProduct(arr) {
  let min_here = arr[0],
    max_here = arr[0],
    max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let temp = Math.max(Math.max(arr[i], arr[i] * max_here), arr[i] * min_here);
    min_here = Math.min(Math.min(arr[i], arr[i] * max_here), arr[i] * min_here);
    max_here = temp;

    max = Math.max(max, max_here);
  }

  return max;
}

console.log(maximumProduct(arr));
