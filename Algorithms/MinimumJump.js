let arr = [1, 2, 1, 2, 0, 3, 2, 1, 2, 1, 2];

function minimumJump(arr) {
  let near = 0,
    far = 0,
    jumps = 0;

  while (far < arr.length - 1) {
    let farthest = 0;
    for (let i = near; i <= far; i++) {
      farthest = Math.max(farthest, i + arr[i]);
    }

    if (farthest <= far) {
      return -1;
    }

    near = far + 1;
    far = farthest;
    jumps++;
  }

  return jumps;
}

console.log(minimumJump(arr));
