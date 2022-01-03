
'use strict';

// Reverse Linked List

let reverse = (linkedList) => {

    if(!linkedList.head){
        return("Empty Linked List");
    }

    let current = linkedList.head;
    let nextNode = current.next;
    let previous = null;

    // console.log(current);

    while(current){
        nextNode = current.next;
        
        current.next = previous;
        previous = current;
        current = nextNode;
    }

    linkedList.head = previous;
    // console.log(previous);
    return(linkedList);
}

module.exports = reverse;