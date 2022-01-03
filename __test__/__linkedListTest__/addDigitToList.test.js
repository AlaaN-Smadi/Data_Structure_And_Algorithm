
'use strict';

// Given a single-digit number k and a singly linked list whose nodes stores digits
// of a non-negative number, add k to the linked list.

// Input Examle --> list(9 —> 9 —> 9 —> 3 —> NULL), 7
// 9993 + 7 = 10000
// OutPut result --> list(1 —> 0 —> 0 —> 0 —> 0 —> NULL)

let LinkedList = require('../../class_Directory/Linked_List/Linked_List');
let addDigit = require('../../function_Directory/LinkedList/addDigitToList');

let myEmptyList = new LinkedList();


// 9 —> 9 —> 9 —> 3 —> NULL
let myFirstList = new LinkedList();
myFirstList.push(9);
myFirstList.push(9);
myFirstList.push(9);
myFirstList.push(3);


// 5 —> 7 —> 8 —> 0 —> NULL
let mySecondList = new LinkedList();
mySecondList.push(5);
mySecondList.push(7);
mySecondList.push(8);
mySecondList.push(0);


describe("Test Add Single digit number to singly linked list", ()=>{
    test("Pass an Empty list", ()=>{
        expect(addDigit(myEmptyList)).toStrictEqual("Empty Linked List");
    });

    test("Pass a nigativer number", ()=>{
        expect(addDigit(myFirstList,-9)).toStrictEqual("Invalid Nigative Number");
        expect(addDigit(mySecondList,-1)).toStrictEqual("Invalid Nigative Number");
    });

    test("Pass a list with number", ()=>{
        expect(addDigit(myFirstList,7)).toStrictEqual("1 -> 0 -> 0 -> 0 -> 0 -> Null");
        expect(addDigit(mySecondList,2)).toStrictEqual("5 -> 7 -> 8 -> 2 -> Null");
    });
})