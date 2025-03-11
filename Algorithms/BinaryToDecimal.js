let bin = 10001;

function binToDec(bin) {
  let dec = 0;
  let pow = 1;

  while (bin > 0) {
    let rem = bin % 10;
    dec += pow * rem;
    pow *= 2;
    bin = Math.floor(bin / 10);
  }

  return dec;
}

console.log(binToDec(bin));
