let dec = 4;

function decToBin(dec) {
  let bin = "";

  while (dec > 0) {
    bin = (dec % 2) + bin;
    dec = Math.floor(dec / 2);
  }

  return bin;
}

console.log(decToBin(dec));
