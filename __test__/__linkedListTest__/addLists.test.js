
'use strict';

// Given a linked list representation of two positive numbers, calculate and store their sum
//  in a new list without extra space.

let calculate = require('../../function_Directory/LinkedList/addListWithoutExtra');
let Linked_List = require('../../class_Directory/Linked_List/Linked_List');

let emptyList = new Linked_List();

let myFirstList = new Linked_List();
myFirstList.push(5);
myFirstList.push(7);
myFirstList.push(3);
myFirstList.push(4);
// 5 -> 7 -> 3 -> 4 -> Null

let mySecondList = new Linked_List();
mySecondList.push(9);
mySecondList.push(4);
mySecondList.push(6);

let myThirdList = new Linked_List();
myThirdList.push(9);
myThirdList.push(4);
myThirdList.push(6);

let myFourthList = new Linked_List();
myFourthList.push(5);
myFourthList.push(7);
myFourthList.push(3);
myFourthList.push(4);

// 946 + 5734 = 6680
// 6 -> 6 -> 8 -> 0 -> Null

describe("Calculte sum of Two linked List without Extra Space", ()=> {
    test('should check Empty Linked List', () => {
        expect(calculate(emptyList)).toStrictEqual("You Should pass two non-Empty linked lists");
    });
    
    test('should give a new Linked List', () => {
        expect(calculate(myFirstList, mySecondList)).toStrictEqual("6 -> 6 -> 8 -> 0 -> Null");
    });

    test('should give a new Linked List', () => {
        expect(calculate(myThirdList, myFourthList)).toStrictEqual("6 -> 6 -> 8 -> 0 -> Null");
    });
})