
'use strict';

// Reverse a string using a stack data structure


let reverseStr = require('../../function_Directory/Stack_And_Queue/reverseStr');

describe("Reverse String using Stack", () => {
    test("Pass Empty Stack", () => {
        expect(reverseStr('')).toStrictEqual("Empty String");
    });

    test("Sort Stack Function", () => {
        expect(reverseStr('New Stack Test')).toStrictEqual("tseT kcatS weN");
    });

    test("Sort Stack Function", () => {
        expect(reverseStr('Alaa Smadi')).toStrictEqual("idamS aalA");
    });
});
