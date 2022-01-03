
'use strict';

// Given a linked list, write a function to rearrange its nodes to be sorted in increasing order.

let reArrange = require("../../function_Directory/LinkedList/reArrange");
let LinkedList = require("../../class_Directory/Linked_List/Linked_List");

let myList = new LinkedList();
myList.push("z");
myList.push("e");
myList.push("a");
myList.push("h");
myList.push("o");

let mySecondList = new LinkedList();
mySecondList.push(5);
mySecondList.push(10);
mySecondList.push(3);
mySecondList.push(0);
mySecondList.push(1);

let myEmptyList = new LinkedList();


describe('Testing Linked List reArrange function', () => {
    test('Test increasing Sort given linked list', () => {

        expect(reArrange(myList)).toStrictEqual('a -> e -> h -> o -> z -> Null');
        expect(reArrange(mySecondList)).toStrictEqual('0 -> 1 -> 3 -> 5 -> 10 -> Null');
        
        expect(reArrange(myEmptyList)).toStrictEqual("Empty Linked List");
       
    });

});