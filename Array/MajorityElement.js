let arr = [3, 3, 4, 2, 3, 3, 3, 1];

function majorityElement(arr) {
  let candidate = null,
    count = 0;

  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }

    count += candidate === num ? 1 : -1;
  }

  let freq = arr.filter((num) => num === candidate).length;

  return freq > Math.floor(arr.length / 2) ? candidate : -1;
}

console.log(majorityElement(arr));
