

// Write a pop() function that is the inverse of push(). The pop() function takes a non-empty list, deletes the head node, and returns the head node’s data.

'use strict';

let popFunction = require("../../function_Directory/LinkedList/pop_In_LinkedList");
let LinkedList = require("../../class_Directory/Linked_List/Linked_List");

let myList = new LinkedList();
myList.push("a");
myList.push("b");
myList.push("c");
myList.push("d");
myList.push("e");

let myEmptyLinkedList = new LinkedList();


describe('Testing Linked List Pop function', () => {
    test('Test delete the head of given linked list', () => {

        expect(popFunction(myList)).toStrictEqual('a');
        expect(popFunction(myList)).toStrictEqual('b');
        expect(popFunction(myList)).toStrictEqual('c');

        expect(myEmptyLinkedList.toString()).toStrictEqual('Empty Linked List');

        expect(popFunction(myEmptyLinkedList)).toStrictEqual('Empty Linked List');

    });

});