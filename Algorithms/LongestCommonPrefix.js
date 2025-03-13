let words = ["geeks", "geeksforgeeks", "geek", "geezer"];

function longestCommonPrefix(words) {
  let prefix = words[0];
  let len = prefix.length;

  for (let i = 1; i < words.length; i++) {
    let curr = words[i];
    while (len > curr.length || prefix !== curr.substring(0, len)) {
      len--;

      if (len === 0) {
        return "";
      }

      prefix = prefix.substring(0, len);
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(words));
