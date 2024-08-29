// leetcode79

const wordSearch = (board, word) => {
  let rows = board.length;
  let cols = board[0].length;
  let paths = [];

  function backtrack(row, col, count) {
    if (word.length === count) {
      return true;
    }

    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      word[count] != board[row][col] ||
      paths.some((path) => path[0] === row && path[1] === col)
    ) {
      return false;
    }

    paths.push([row, col]);
    let res =
      backtrack(row + 1, col, count + 1) ||
      backtrack(row - 1, col, count + 1) ||
      backtrack(row, col + 1, count + 1) ||
      backtrack(row, col - 1, count + 1);

    return res;
  }

  for (let r of [...Array(rows).keys()]) {
    for (let c of [...Array(cols).keys()]) {
      if (backtrack(r, c, 0)) {
        return true;
      }
      return false;
    }
  }
};

console.log(
  wordSearch(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
