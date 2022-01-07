
'use strict';


// Problems solved using partitioning logic of Insertion Sort

let sort = arr => {
    if (arr.length == 0) {
        return ('Empty Array');
    }

    let unsorted = 1;
    let newUnsorted = arr.length;
    while(unsorted<newUnsorted){
        unsorted++;
        for (let sorted = 0; sorted <= unsorted; sorted++) {
            if (sorted == 0 && arr[unsorted] < arr[sorted]) {
                let swapEle = arr[unsorted];
                arr.splice(unsorted, 1);
                arr.splice(0, 0, swapEle);
                
                break;
            } else if (arr[unsorted] >= arr[sorted] && arr[unsorted] <= arr[sorted + 1]) {
                let swapEle = arr[unsorted];
                arr.splice(unsorted, 1);
                arr.splice(sorted + 1, 0, swapEle);
                
                break;
            }else{
                continue;
            }
        }
    }

    return arr;
}

module.exports = sort;