let str = "sumit sourav choudhury";

function alternateVowels(str) {
  let flag = true;
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);

    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
      if (flag === true) {
        ans += c.toUpperCase();
        flag = false;
      } else {
        ans += c;
        flag = true;
      }
    } else {
      ans += c;
    }
  }

  return ans;
}

console.log(alternateVowels(str));
