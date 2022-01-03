
'use strict';

// Given a linked list, write a function to rearrange its nodes to be sorted in increasing order.

let reArrangeLinkedList = (linkedList) => {
    if(linkedList.head === null){
        return ("Empty Linked List");
    }
    
    let current = linkedList.head;
    while(current){
        let nextNodes = current.next;
        while(nextNodes){
            if(current.value > nextNodes.value){
                let smallValue = nextNodes.value;
                nextNodes.value = current.value;
                current.value = smallValue;
            }
            nextNodes = nextNodes.next;
        }
        current = current.next;
    }

    // To print Linked list
    return(linkedList.toString());
}


module.exports = reArrangeLinkedList;