let arr = [1, 2, 3, 4, 5];

function productExceptSelf(arr) {
  let a = [];
  a[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    a[i] = arr[i - 1] * a[i - 1];
  }

  let suffix = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    a[i] = suffix * a[i];
    suffix *= arr[i];
  }

  return a;
}

console.log(productExceptSelf(arr));
