
'use strict';

// Given an M × N matrix of integers whose each cell can contain a negative, zero,
// or a positive value, determine the minimum number of passes required 
// to convert all negative values in the matrix positive.

let minPass = require("../../function_Directory/Stack_And_Queue/minPass");

let inputArr = [
    [-1, -9, 0, -1, 0],
    [-8, -3, -2, 9, -7],
    [2, 0, 0, -6, 0],
    [0, -7, -3, 5, -4]
];


let allPositive = [
    [1,5,9,0],
    [2,8,1,0],
    [1,7,4,0],
    [3,5,10,5]
]
// min pass => 3 ==> Reference --> https://www.techiedelight.com/find-minimum-passes-required-convert-negative-values-matrix/

let emptyMatrix = [];

describe("Minimum passes to convert all matrix elements into positive", ()=>{
    test('Pass Empty matrix', () => {
        expect(minPass(emptyMatrix)).toStrictEqual("Empty Matrix");
    });

    test('Pass a matrix with negative integers', () => {
        expect(minPass(inputArr)).toStrictEqual(3);
    });

    test('Pass a matrix with all positive integers', () => {
        expect(minPass(allPositive)).toStrictEqual(0);
    });

})