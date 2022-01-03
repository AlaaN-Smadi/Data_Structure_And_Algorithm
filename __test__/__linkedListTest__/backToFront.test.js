
'use strict';

// Given a linked list, move its last node to the front.

let backToFront = require('../../function_Directory/LinkedList/backToFront');
let Linked_List = require('../../class_Directory/Linked_List/Linked_List');

let myEmptyList = new Linked_List();

let myListSingleNode = new Linked_List();
myListSingleNode.push(1);

// 2 -> 0 -> 2 -> 1 -> Null
let myFirstList = new Linked_List();
myFirstList.push(2);
myFirstList.push(0);
myFirstList.push(2);
myFirstList.push(1);

// A -> B -> C -> D -> Null
let mySecondList = new Linked_List();
mySecondList.push("A");
mySecondList.push("B");
mySecondList.push("C");
mySecondList.push("D");


describe("Test Move last node of a linked list to the front", () => {
    test("Pass Empty Linked List", ()=>{
        expect(backToFront(myEmptyList)).toStrictEqual("Empty Linked List");
    });

    test("Pass Linked List with single node", ()=>{
        expect(backToFront(myListSingleNode)).toStrictEqual("Linked list with single node");
    });

    test("Pass Linked List To move last node to the front", ()=>{
        expect(backToFront(myFirstList)).toStrictEqual("1 -> 0 -> 2 -> 2 -> Null");
        expect(backToFront(mySecondList)).toStrictEqual("D -> B -> C -> A -> Null");
    });
})