let str = "     sumit  sourav   choudhury ";

function capitalize(str) {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    if (
      (i === 0 && str.charAt(i) !== " ") ||
      (str.charAt(i) !== " " && str.charAt(i - 1) === " ")
    ) {
      ans += str.charAt(i).toUpperCase();
    } else if (
      (i === str.length - 1 && str.charAt(i) !== " ") ||
      (str.charAt(i) !== " " && str.charAt(i + 1) === " ")
    ) {
      ans += str.charAt(i).toUpperCase();
    } else {
      ans += str.charAt(i);
    }
  }

  return ans;
}

console.log(capitalize(str));
