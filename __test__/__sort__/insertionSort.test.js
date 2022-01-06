
'use strict';

let sort = require('../../function_Directory/sort/insertionSort');

let testArr = [1, 5, 10, 2, 5, 1, -2, 0, 1, 5, 15];
let emptyArr = [];

//  -2  0  1  2  4  6  7  8

describe('Testing Insertion Sort function', () => {
    test('pass Empty Array', () => {
        expect(sort(emptyArr)).toStrictEqual("Empty Array");
    });

    test('Sort the Array', () => {
        expect(sort(testArr)).toStrictEqual([-2, 0, 1, 1, 1, 2, 5, 5, 5, 10, 15]);
    });
    // 

});