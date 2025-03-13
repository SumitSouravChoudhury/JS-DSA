let str = "aaacccccccccccccccccccccccccccccccccbddwwwuuuffff";

function stringCompression(str) {
  let n = str.length;
  let arr = [];
  let index = 0;

  for (let i = 0; i < n; ) {
    let c = str[i];
    let count = 0;

    while (i < n && c === str[i]) {
      i++;
      count++;
    }

    arr[index++] = c;

    if (count > 1) {
      let digits = String(count).split("");
      digits.forEach((digit) => {
        arr[index++] = digit;
      });
    }
  }

  return arr;
}

console.log(stringCompression(str));
