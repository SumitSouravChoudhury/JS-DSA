let str = "My name is Sumit Sourav Choudhury";

function reverseEachWord(str) {
  let arr = str.split(" ");
  let ans = "";

  for (let i = 0; i < arr.length; i++) {
    let c = arr[i].split("").reverse().join("");
    ans += c + " ";
  }

  return ans.trim();
}

console.log(reverseEachWord(str));
