let arr = [2, 5, 1, 6, 7, 9, 8, 5, 4];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;

        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    if (swapped === false) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort(arr));
