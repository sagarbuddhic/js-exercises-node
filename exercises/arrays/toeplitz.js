const isToeplitz = (matrix) => {
  const rows = matrix.length;
  const columns = matrix[0].length;

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < columns; c++) {
      if (matrix[r][c] !== matrix[r - 1][c - 1]) {
        return false;
      }
    }
  }
  return true;
};

// Example
console.log(
  isToeplitz([
    [7, 8, 9],
    [4, 7, 8],
    [3, 4, 7],
  ])
); // true
