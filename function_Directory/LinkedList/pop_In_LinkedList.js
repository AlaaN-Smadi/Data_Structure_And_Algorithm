
'use strict';

// Write a pop() function that is the inverse of push(). The pop() function takes a non-empty list, deletes the head node, and returns the head node’s data.


let pop = (linkedList) => {
    if(linkedList.head === null){
        return("Empty Linked List");
    }

    let head = linkedList.head;
    linkedList.head = head.next;

    return(head.value);
}

module.exports = pop;
