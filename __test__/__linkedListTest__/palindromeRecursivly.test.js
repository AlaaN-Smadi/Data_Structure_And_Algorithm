
'use strict';

// Given a linked list of characters, recursively check if it is palindrome or not.


let palindromeList = require('../../function_Directory/LinkedList/palindromeList');
let Linked_List = require('../../class_Directory/Linked_List/Linked_List');

let myEmptyList = new Linked_List();

let myFirstList = new Linked_List();
myFirstList.push('A');
myFirstList.push('B');
myFirstList.push('C');
myFirstList.push('B');
myFirstList.push('A');

let mySecondList = new Linked_List();
mySecondList.push('A');
mySecondList.push('B');
mySecondList.push('C');
mySecondList.push('C');
mySecondList.push('B');



describe('Testing Linked List palindrome function', () => {
    test('Test Empty List => ', () => {
        expect(palindromeList(myEmptyList)).toStrictEqual("Empty Linked List");
    });

    test('Test palindrome List => ', () => {
        expect(palindromeList(myFirstList)).toBe(true);
    });

    test('Test non-palindrome List => ', () => {
        expect(palindromeList(mySecondList)).toBe(false);
    });

});