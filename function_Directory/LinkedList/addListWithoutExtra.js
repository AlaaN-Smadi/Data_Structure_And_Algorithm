
'use strict';


// Given a linked list representation of two positive numbers, calculate and store their sum in a new list without extra space.

let reverse = require('./reverseList');

let addListWithoutExtra = (list1, list2) => {

    if (!list1.head || !list2.head) {
        return ("You Should pass two non-Empty linked lists");
    }

    list1.head.value = helperMethod(list1.head);
    list2.head.value = helperMethod(list2.head);

    // console.log(list1.head.value);
    // console.log(list2.head.value);

    if (testLengthOfLists(list1.head.value, list2.head.value) == 1) {
        list1.head.value = list1.head.value + list2.head.value;
        list1.head = appendFun(list1.head, list1.head.value);

        list1 = reverse(list1);

        return (list1.toString());
    } else {
        list2.head.value = list1.head.value + list2.head.value;
        list2.head = appendFun(list2.head, list2.head.value);

        list2 = reverse(list2);

        return (list2.toString());
    }
}

let helperMethod = (node) => {

    let current = node.next;

    while(current){
        node.value *=10;
        node.value+= current.value;
        current = current.next;
    }

    return (node.value);
}

let testLengthOfLists = (value1, value2) => {
    while (value1 > 0 && value2 > 0) {
        value1 = value1 / 10;
        value2 = value2 / 10;
    }

    if (value1 > value2) {
        return 1;
    } else {
        return 2;
    }
}


let appendFun = (node, value) => {
    // console.log(value);
    let current = node;
    while(value > 0){
        current.value = value%10;
        value = parseInt(value/10);
        current = current.next;
    }

    return (node);
}



module.exports = addListWithoutExtra;