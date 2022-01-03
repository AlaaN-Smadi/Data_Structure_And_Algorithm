
'use strict';

// Given a linked list sorted in increasing order, 
// write a function that removes duplicate nodes from it by traversing the list only once.


let removeDuplicate = (list) => {
    if (!list.head) {
        return ("Empty Linked List");
    }
    if (!list.head.next) {
        return ("Linked list with single node");
    }

    let current = list.head;
    while (current.next) {
        if (current.value === current.next.value) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return (list.toString());
}

module.exports = removeDuplicate;