'use strict';

let Stack = require("../../class_Directory/Stack/Stack");
let reverse = require('../../function_Directory/Stack_And_Queue/reverseStack');

let myEmptyStack = new Stack();


// 1 -> 2 -> 3 -> 4 -> Null
let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

describe("Stack Reverse", () => {
    test("Pass Empty Stack", () => {
        expect(reverse(myEmptyStack)).toStrictEqual("Empty Stack");
    });

    test("Reverse Stack Function", () => {
        expect(reverse(myStack)).toStrictEqual("4 -> 3 -> 2 -> 1 -> Null");
    });
});
