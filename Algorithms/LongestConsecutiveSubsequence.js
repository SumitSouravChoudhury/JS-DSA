let arr = [4, 40, 53, 6, 7, 9, 10, 11, 12, 18, 8, 1, 2, 3];

function longestConsecutiveSubsequence(arr) {
  let set = new Set();
  let max_count = 0;

  for (let i of arr) {
    set.add(i);
  }

  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i] - 1)) {
      let j = arr[i];
      while (set.has(j)) {
        j++;
      }
      if (max_count < j - arr[i]) {
        max_count = j - arr[i];
      }
    }
  }

  return max_count;
}

console.log(longestConsecutiveSubsequence(arr));
