let arr1 = [1, 2, 4, 5, 5, 6, 7, 8, 10];
let arr2 = [2, 3, 5, 7, 8, 20];
let arr3 = [2, 5, 6, 7, 8];

function findCommon(arr1, arr2, arr3) {
  let i = 0,
    j = 0,
    k = 0;

  let n1 = arr1.length;
  let n2 = arr2.length;
  let n3 = arr3.length;

  let ans = [];

  while (i < n1 && j < n2 && k < n3) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      ans.push(arr1[i]);
      i++;
      j++;
      k++;
      while (i < n1 && arr1[i] === arr1[i - 1]) {
        i++;
      }
      while (j < n2 && arr2[j] === arr2[j - 1]) {
        j++;
      }
      while (k < n3 && arr3[k] === arr3[k - 1]) {
        k++;
      }
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }
  return ans;
}

console.log(findCommon(arr1, arr2, arr3));
