
'use strict';

// Reverse All elements in the list

let reverse = require('../../function_Directory/LinkedList/reverseList');
let LinkedList = require('../../class_Directory/Linked_List/Linked_List');

let myEmptyList = new LinkedList();


// 0 -> 1 -> 2 -> 3
let myFirstList = new LinkedList();
myFirstList.push(0);
myFirstList.push(1);
myFirstList.push(2);
myFirstList.push(3);


// A -> B -> C -> D
let mySecondList = new LinkedList();
mySecondList.push('A');
mySecondList.push('B');
mySecondList.push('C');
mySecondList.push('D');


describe("Reverse All Elements in the list", ()=>{
    test("Pass Empty List which is an edge case", () => {
        expect(reverse(myEmptyList)).toStrictEqual("Empty Linked List");
    })

    test("Pass a valid list and return it's Elements reversed", () => {
        expect(reverse(myFirstList).toString()).toStrictEqual("3 -> 2 -> 1 -> 0 -> Null");
        expect(reverse(mySecondList).toString()).toStrictEqual("D -> C -> B -> A -> Null");
    })
})