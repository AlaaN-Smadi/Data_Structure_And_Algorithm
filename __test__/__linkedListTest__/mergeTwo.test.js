
'use strict';

// Given Two sorted linked lists, merge them into a single list in increasing order.s

let mergeTwo = require('../../function_Directory/LinkedList/merge_Two_Sorted');
let LinkedList = require('../../class_Directory/Linked_List/Linked_List');

let firstList = new LinkedList();
firstList.push("a");
firstList.push("d");
firstList.push("e");
firstList.push("g");
firstList.push("i");

let secondList = new LinkedList();
secondList.push("b");
secondList.push("c");
secondList.push("f");
secondList.push("h");
secondList.push("j");
secondList.push("k");
secondList.push("l");
secondList.push("m");

let myEmptyList = new LinkedList();

describe('Testing Linked List Merge function', () => {
    test('Test merge given linked list into one list', () => {

        expect(mergeTwo(firstList, secondList)).toStrictEqual('a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> k -> l -> m -> Null');
        
        expect(mergeTwo(myEmptyList, myEmptyList)).toStrictEqual("You Should pass two non-Empty linked lists");
       
    });

});