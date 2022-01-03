
'use strict';

// Given a single-digit number k and a singly linked list whose nodes stores digits
// of a non-negative number, add k to the linked list.

// Input Examle --> list(9 —> 9 —> 9 —> 3 —> NULL), 7
// 9993 + 7 = 10000
// OutPut result --> list(1 —> 0 —> 0 —> 0 —> 0 —> NULL)

let reverse = require('./reverseList');

let addDigit = (list, number) => {

    if (!list.head) {
        return ("Empty Linked List");
    }

    if (number < 0) {
        return ("Invalid Nigative Number");
    }

    let total = 0;
    let current = list.head;

    while (current) {
        total *= 10;
        total += current.value;
        current = current.next;
    }

    total+=number;

    list.head = null;
    while (total > 0) {
        list.push(total % 10);
        total = parseInt(total / 10);
    }

    reverse(list);
    return (list.toString());

}


module.exports = addDigit;