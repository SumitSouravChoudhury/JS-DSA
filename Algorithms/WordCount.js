let str = "    my name is sumit   sourav choudhury";

function wordCount(str) {
  let count = 0;
  let isWord = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (!isWord) {
        count++;
        isWord = true;
      }
    } else {
      isWord = false;
    }
  }

  return count;
}

console.log(wordCount(str));
