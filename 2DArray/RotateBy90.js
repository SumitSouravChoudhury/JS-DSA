let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotateMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

console.log(rotateMatrix(matrix));
