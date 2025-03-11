let int = 2999;

function intToRoman(int) {
  let i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let m = ["", "M", "MM", "MMM"];

  let thousands = m[Math.floor(int / 1000)];
  let hundreds = c[Math.floor((int % 1000) / 100)];
  let tens = x[Math.floor((int % 100) / 10)];
  let ones = i[int % 10];

  return thousands + hundreds + tens + ones;
}

console.log(intToRoman(int));
