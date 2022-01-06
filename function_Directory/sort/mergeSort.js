
'use strict';

// Problems solved using partitioning logic of Quicksort

let sort = (arr, start = 0, end = arr.length - 1) => {
    if (arr.length == 0) {
        return ("Empty Array");
    }

    if (start < end) {
        let mid = (start + end) / 2;
        sort(arr, start, mid);
        sort(arr, mid + 1, end);

        arr = merge(arr, start, mid, end);
    }
    return (arr);
}

let merge = (arr, start, mid, end) => {
    let newArr = [];

    let newStart = start;
    let newMid = mid + 1;
    let index = 0;

    while (newStart <= mid && newMid <= end) {
        if (arr[newMid] < arr[newStart]) {
            newArr[index] = arr[newMid];
            index += 1;
            newMid += 1;
        } else {
            newArr[index] = arr[newStart];
            index += 1;
            newStart += 1;
        }
    }

    while (newStart <= mid) {
        newArr[index] = arr[newStart];
        index += 1;
        newStart += 1;
    }

    while (newMid <= end) {
        newArr[index] = arr[newMid];
        index += 1;
        newMid += 1;
    }

    for(let i=start;i<=end;i++){
        arr[i] = newArr[i-start];
    }

    return arr;

}

module.exports = sort;