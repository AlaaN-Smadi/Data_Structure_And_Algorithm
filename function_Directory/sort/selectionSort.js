
'use strict';

// Problems solved using partitioning logic of selectionSort

let sort = arr => {
    if(arr.length==0){
        return ('Empty Array');
    }
    for (let i = 0; i < arr.length; i++) {
        for (let nextIndexes = i; nextIndexes < arr.length; nextIndexes++){
            if(arr[i]>arr[nextIndexes]){
                let swapVar = arr[i];
                arr[i] = arr[nextIndexes];
                arr[nextIndexes] = swapVar;
            }
        }
    }

    return arr;
}

module.exports = sort;