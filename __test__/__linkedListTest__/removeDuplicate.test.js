
'use strict';

// Given a linked list sorted in increasing order, 
// write a function that removes duplicate nodes from it by traversing the list only once.

let removeDuplicate = require('../../function_Directory/LinkedList/removeDuplicate');
let Linked_List = require('../../class_Directory/Linked_List/Linked_List');


let myEmptyList= new Linked_List();

let mySingleNodeList = new Linked_List();
mySingleNodeList.push(1);


// a -> a -> b -> c -> d -> d -> e -> Null
let myFirstList = new Linked_List();
myFirstList.push("a");
myFirstList.push("a");
myFirstList.push("b");
myFirstList.push("c");
myFirstList.push("d");
myFirstList.push("d");
myFirstList.push("e");


// 1 -> 2 -> 2 -> 2 -> 3 -> 4 -> 4 -> 5 -> Null
let mySecondList = new Linked_List();
mySecondList.push(1);
mySecondList.push(2);
mySecondList.push(2);
mySecondList.push(2);
mySecondList.push(3);
mySecondList.push(4);
mySecondList.push(4);
mySecondList.push(5);


describe("Remove Duplicate Values from sorted increasing linked list", () => {
    test("Pass Empty Linked List", () => {
        expect(removeDuplicate(myEmptyList)).toStrictEqual("Empty Linked List");
    });

    test("Pass Single Node Linked List", () => {
        expect(removeDuplicate(mySingleNodeList)).toStrictEqual("Linked list with single node");
    });

    test("Pass Linked List To remove Duplicate Values", () => {
        expect(removeDuplicate(myFirstList)).toStrictEqual("a -> b -> c -> d -> e -> Null");
        expect(removeDuplicate(mySecondList)).toStrictEqual("1 -> 2 -> 3 -> 4 -> 5 -> Null");
    });
})