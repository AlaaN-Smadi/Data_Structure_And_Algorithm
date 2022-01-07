
'use strict';

let sort = require('../../function_Directory/sort/mergeSort');

let testArr = [5, 9, 4 ,6, 3, -2, -1, 0, 1, 12];
let emptyArr = [];

describe('Testing Merge Sort function', () => {
    test('pass Empty Array', () => {
        expect(sort(emptyArr)).toStrictEqual("Empty Array");
    });

    test('Sort the Array', () => {
        expect(sort(testArr)).toStrictEqual([-2, -1, 0, 1, 3, 4, 5, 6, 9, 12]);
    });
    // 

});