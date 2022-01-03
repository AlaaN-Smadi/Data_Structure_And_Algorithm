
'use strict';

// Write an efficient algorithm to reverse the specified portion of a given linked list.

let Linked_List = require('../../class_Directory/Linked_List/Linked_List');
let reversePortion = require('../../function_Directory/LinkedList/reversePortion');

let emptyList = new Linked_List();

let myFirstList = new Linked_List();
myFirstList.push(1);
myFirstList.push(2);
myFirstList.push(3);
myFirstList.push(4);
myFirstList.push(5);
myFirstList.push(6);
myFirstList.push(7);
myFirstList.push(8);

let mySecondList = new Linked_List();
mySecondList.push('a');
mySecondList.push('b');
mySecondList.push('c');
mySecondList.push('d');
mySecondList.push('e');
mySecondList.push('f');
mySecondList.push('g');

let myThirdList = new Linked_List();
myThirdList.push(1);
myThirdList.push(2);
myThirdList.push(3);
myThirdList.push(4);


describe('Testing Reverse Specific portion function in a Linked List ', () => {
    test('Test reverse given emprty linked list', () => {

        expect(reversePortion(emptyList)).toStrictEqual('Empty Linked List');
       
    });

    test('Test reverse given linked list with valid portion', () => {

        // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 
        expect(reversePortion(myFirstList, 1, 4)).toStrictEqual('1 -> 5 -> 4 -> 3 -> 2 -> 6 -> 7 -> 8 -> Null');
        // 1 -> 5 -> 4 -> 3 -> 2 -> 6 -> 7 -> 8 

        // a -> b -> c -> d -> e -> f -> g
        expect(reversePortion(mySecondList, 2, 4)).toStrictEqual('a -> b -> e -> d -> c -> f -> g -> Null');
       // a -> b -> e -> d -> c -> f -> g

    });

    test('Test reverse given linked list with invalid portion', () => {

        expect(reversePortion(myThirdList, 1, 4)).toStrictEqual('Invalid Portion');
       
    });
});