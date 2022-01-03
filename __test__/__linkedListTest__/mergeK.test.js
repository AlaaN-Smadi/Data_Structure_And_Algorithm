
'use strict';

// Given K sorted linked lists, merge them into a single list in increasing order.s

let mergeK = require('../../function_Directory/LinkedList/merge_K_Sorted');
let LinkedList = require('../../class_Directory/Linked_List/Linked_List');

let firstList = new LinkedList();
firstList.push(1);
firstList.push(5);
firstList.push(7);

let secondList = new LinkedList();
secondList.push(2);
secondList.push(3);
secondList.push(6);
secondList.push(9);


let thirdList = new LinkedList();
thirdList.push(4);
thirdList.push(8);
thirdList.push(10);


let listsArr = [];
listsArr.push(firstList);
listsArr.push(secondList);
listsArr.push(thirdList);




let emptyLists = new LinkedList();
let emptyListsArr = [];
let emptyListsArrTwo = [];
emptyListsArrTwo.push(emptyLists);
let emptyListsArrThree = [];
emptyListsArrThree.push(emptyLists);
emptyListsArrThree.push(emptyLists);
emptyListsArrThree.push(emptyLists);



describe('Testing Linked List Merge function', () => {
    test('Test merge given linked list into one list', () => {

        // expect(mergeK(listsArr)).toStrictEqual('1 —> 2 —> 3 —> 4 —> 5 —> 6 —> 7 —> 8 —> 9 —> 10 —> Null');
        
        expect(mergeK(emptyListsArr)).toStrictEqual("You Should pass K non-Empty linked lists");
        expect(mergeK(emptyListsArrTwo)).toStrictEqual("You Should pass K non-Empty linked lists");
        expect(mergeK(emptyListsArrThree)).toStrictEqual("You Should pass K non-Empty linked lists");
       

        expect(mergeK(listsArr)).toStrictEqual('1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> Null');

    });

});