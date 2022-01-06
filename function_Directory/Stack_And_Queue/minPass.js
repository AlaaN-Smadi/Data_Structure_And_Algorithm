
'use strict';

// Given an M × N matrix of integers whose each cell can contain a negative, zero,
// or a positive value, determine the minimum number of passes required 
// to convert all negative values in the matrix positive.

let Queue = require('../../class_Directory/Queue/Queue');

let minPass = (matrix) => {
    if (matrix.length === 0) {
        return ("Empty Matrix");
    }

    let changedData = new Queue();
    let result = 0;
    let loop = false;

    for (let m = 0; m < matrix.length; m++) {
        for (let n = 0; n < matrix[0].length; n++) {
            if(matrix[m][n]<0){
                loop=true;
                break;
            }   
        }
        if(loop){
            break;
        }
    }

    while (loop) {
        loop = false;
        result += 1;

        for (let m = 0; m < matrix.length; m++) {
            for (let n = 0; n < matrix[0].length; n++) {
                if (matrix[m][n] >= 0) {
                    changedData.enqueue(matrix[m][n]);
                } else {
                    if (m > 0 && (m < matrix.length - 1)) {
                        if (matrix[m + 1][n] > 0 || matrix[m - 1][n] > 0 || matrix[m][n + 1] > 0 || matrix[m][n - 1] > 0) {
                            changedData.enqueue(-1 * matrix[m][n]);
                        } else {
                            changedData.enqueue(matrix[m][n]);
                        }
                    } else if (m == 0) {
                        if (matrix[m + 1][n] > 0 || matrix[m][n + 1] > 0 || matrix[m][n - 1] > 0) {
                            changedData.enqueue(-1 * matrix[m][n]);
                        } else {
                            changedData.enqueue(matrix[m][n]);
                        }
                    } else {
                        if (matrix[m - 1][n] > 0 || matrix[m][n + 1] > 0 || matrix[m][n - 1] > 0) {
                            changedData.enqueue(-1 * matrix[m][n]);
                        } else {
                            changedData.enqueue(matrix[m][n]);
                        }
                    }
                }
            }

            for (let n = 0; n < matrix[0].length; n++) {
                matrix[m][n] = changedData.dequeue();
                if(matrix[m][n]<0){
                    loop = true;
                }
            }

        }
    }

    // console.log(matrix);
    return (result);
}

module.exports = minPass;




/*



*/