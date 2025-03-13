let str = "My name is Sumit Sourav Choudhury";

function reverseString(str) {
  let arr = str.split(" ");
  let ans = "";

  for (let i = 0; i < arr.length; i++) {
    let c = arr[i].split("").reverse().join("");
    ans = " " + c + ans;
  }

  return ans.trim();
}

console.log(reverseString(str));
