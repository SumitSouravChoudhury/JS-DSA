let str1 = "abc";
let str2 = "abcabc";

function find(a, b) {
  if (b === 0) {
    return a;
  }

  return find(b, a % b);
}

function findGcd(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  let gcd = find(str1.length, str2.length);

  return str1.substring(0, gcd);
}

console.log(findGcd(str1, str2));
