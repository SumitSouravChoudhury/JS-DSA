let str1 = "sumit";
let str2 = "usitm";

function isAnagram(str1, str2) {
  let map = new Map();

  for (let c of str1) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }

  for (let c of str2) {
    if (!map.has(c) || map.get(c) == 0) {
      return false;
    }

    map.set(c, map.get(c) - 1);
  }

  return true;
}

console.log(isAnagram(str1, str2));
