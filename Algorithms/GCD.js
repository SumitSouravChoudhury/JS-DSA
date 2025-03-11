let a = 24;
let b = 20;

function findGcd(a, b) {
  if (b === 0) {
    return a;
  }

  return findGcd(b, a % b);
}

console.log(findGcd(a, b));
