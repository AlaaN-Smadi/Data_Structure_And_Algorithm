
'use strict';

// Given a stack, recursively reverse it only using its abstract data type 
// (ADT) standard operations, i.e., push(item), pop(), peek(), isEmpty(), size(), etc.


let Stack = require("../../class_Directory/Stack/Stack");

let myEmptyStack = new Stack();

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

describe("Stack Implementation", () => {
    test("Push Method", () => {
        expect(myStack.push(5)).toStrictEqual("Added new node successfully");
        expect(myStack.toString()).toStrictEqual("5 -> 4 -> 3 -> 2 -> 1 -> Null");

        expect(myEmptyStack.push(5)).toStrictEqual("Added the first node");
        expect(myEmptyStack.toString()).toStrictEqual("5 -> Null");
    });

    test("Pop Method", () => {
        expect(myStack.pop()).toStrictEqual(5);
        expect(myStack.pop()).toStrictEqual(4);

        expect(myEmptyStack.pop()).toStrictEqual(5);
        expect(myEmptyStack.pop()).toStrictEqual("Empty Stack");
        expect(myEmptyStack.toString()).toStrictEqual("Empty Stack");
    });

    test("peek Method", () => {
        expect(myStack.peek()).toStrictEqual(3);

        expect(myEmptyStack.peek()).toStrictEqual("Empty Stack");
    });

    test("is Empty Method", () => {
        expect(myStack.isEmpty()).toBe(false);

        expect(myEmptyStack.isEmpty()).toBe(true);
    });
})