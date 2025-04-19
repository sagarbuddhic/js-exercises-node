
const solveSudoku = (board) => {
    recursive(board, 0, 0);
    return board;
}

const recursive = (board, rowIndex, colIndex) => {
    if(rowIndex === 9) {
        return true;
    }

    if(colIndex === 9) {
        return recursive(board, rowIndex +1, 0);
    }

    if(board[rowIndex][colIndex] != ".") {
        return recursive(board, rowIndex, colIndex + 1);
    }

    for (let i = 1; i < 10; i++) {
        if(isValid(board, rowIndex, colIndex, i.toString())) {
            board[rowIndex][colIndex] = i.toString();
            if(recursive(board, rowIndex, colIndex + 1)) {
                return true;
            }
            board[rowIndex][colIndex] = ".";
        }
    }
    return false;
}

const isValid = (board, rowIndex, colIndex,  val) => {
    if (board[rowIndex].includes(val)) return false;
    
    for(let i= 0; i < board.length; i++) {
        if(board[i][colIndex] === val) {
            return false;
        }
    }

    let [top, left] = [Math.floor(rowIndex / 3) * 3, Math.floor(colIndex / 3) * 3];

    for (let i =top; i < top+3; i++) {
        for (let j=left; j < left + 3; j++) {
            if(board[i][j] === val) {
                return false;
            }
        }
    }

    return true;
}

let input = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];

console.log(solveSudoku(input));