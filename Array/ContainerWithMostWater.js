let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function mostWater(arr) {
  let left = 0,
    right = arr.length - 1;

  let maxWater = 0;

  while (left < right) {
    let width = right - left;
    let area = width * Math.min(arr[left], arr[right]);

    maxWater = Math.max(maxWater, area);

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

console.log(mostWater(arr));
