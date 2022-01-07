
'use strict';

let sort = require('../../function_Directory/sort/bubbleSort');

let testArr = [1, 5, 10, 2, 5, 1, -2, 0, 1, 5, 15];
let emptyArr = [];

describe('Testing Bubble Sort function', () => {
    test('pass Empty Array', () => {
        expect(sort(emptyArr)).toStrictEqual("Empty Array");
    });

    test('Sort the Array', () => {
        expect(sort(testArr)).toStrictEqual([-2, 0, 1, 1, 1, 2, 5, 5, 5, 10, 15]);
    });
    // 

});