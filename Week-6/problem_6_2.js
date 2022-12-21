// Spiral traversal of 2D Matrix

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13,14,15,16]
]

function spiral(arr) {
    let row = 0;
    let col = 0;
    let rowEnd = arr.length - 1;
    let colEnd = arr[0].length - 1;
    
    let result = new Array();

    while (col <= colEnd && row <= rowEnd) {
        
        // traverse right
        for (let i = col; i <= colEnd; i++){
            result.push(arr[row][i]);
        }
        row++;


        // traverse down
        for (let i = row; i <= rowEnd; i++){
            result.push(arr[i][colEnd]);
        }
        colEnd--;


        // traverse left
        for (let i = colEnd; i >= col; i--){
            result.push(arr[rowEnd][i]);
        }
        rowEnd--;

        //traverse up
        for (let i = rowEnd; i >= row; i--){
            result.push(arr[i][col]);
        }
        col++;
    }

    return result;
}

let spiralMatrix = spiral(matrix);
console.log(spiralMatrix);