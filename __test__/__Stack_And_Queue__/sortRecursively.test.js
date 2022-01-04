
'use strict';

// Given a stack, sort it using recursion. The use of any other data structures 
// (like containers in STL or Collections in Java) is not allowed.


let Stack = require("../../class_Directory/Stack/Stack");
let sort = require('../../function_Directory/Stack_And_Queue/sortRecursively');

let myEmptyStack = new Stack();


// 1 -> -2 -> 3 -> 10 -> 5 -> Null
let myStack = new Stack();
myStack.push(1);
myStack.push(-2);
myStack.push(3);
myStack.push(10);
myStack.push(5);

// Z -> G -> A -> R -> T -> Q -> Null
let mySecondStack = new Stack();
mySecondStack.push("Z");
mySecondStack.push("G");
mySecondStack.push("A");
mySecondStack.push("R");
mySecondStack.push("T");
mySecondStack.push("Q");
// A -> G -> Q -> R -> T -> Z -> Null


describe("Sort Stack using Recursive Function", () => {
    test("Pass Empty Stack", () => {
        expect(sort(myEmptyStack)).toStrictEqual("Empty Stack");
    });

    test("Sort Stack Function", () => {
        expect(sort(myStack)).toStrictEqual("-2 -> 1 -> 3 -> 5 -> 10 -> Null");
    });

    test("Sort Stack Function", () => {
        expect(sort(mySecondStack)).toStrictEqual("A -> G -> Q -> R -> T -> Z -> Null");
    });
});
