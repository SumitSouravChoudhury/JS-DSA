let arr = [9, 1, 4, 7, 3, -1, 0, 5, 8, -3, 6, -2];

function longestConsequtiveSequence(arr) {
  let set = new Set();

  for (let i of arr) {
    set.add(i);
  }

  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i] - 1)) {
      let j = arr[i];

      while (set.has(j)) {
        j++;
      }

      if (j - arr[i] > max) {
        max = j - arr[i];
      }
    }
  }

  return max;
}

console.log(longestConsequtiveSequence(arr));
