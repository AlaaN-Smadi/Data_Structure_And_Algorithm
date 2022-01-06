

'use strict';

// Problems solved using partitioning logic of Bubble Sort


function sort(arr){

    if(arr.length==0){
        return('Empty Array');
    }

    let loop = true;
    while(loop){
        loop = false;
        for (let i = 0; i < arr.length-1; i++) {
            if(arr[i]>arr[i+1]){
                loop=true;
                let swap = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = swap;
            }
        }
    }

    return arr;
}

module.exports = sort;