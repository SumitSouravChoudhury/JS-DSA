let roman = "MMCMXCIX";

function romanToInt(roman) {
  let map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  let ans = 0;

  for (let i = 0; i < roman.length; i++) {
    if (i < roman.length - 1 && map.get(roman[i]) < map.get(roman[i + 1])) {
      ans -= map.get(roman[i]);
    } else {
      ans += map.get(roman[i]);
    }
  }

  return ans;
}

console.log(romanToInt(roman));
