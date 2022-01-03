
'use strict';

// Given a linked list, move its last node to the front.

let backToFront = (list) => {
    if(!list.head){
        return("Empty Linked List");
    }
    if(!list.head.next){
        return('Linked list with single node');
    }

    let frontValue = list.head.value;
    let current = list.head;
    while(current.next){
        current = current.next;
    }
    let swapEle = current.value;
    current.value = frontValue;
    list.head.value = swapEle;

    return(list.toString());
}

module.exports = backToFront;