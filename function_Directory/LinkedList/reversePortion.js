
'use strict';

// Write an efficient algorithm to reverse the specified portion of a given linked list.

let reversePortion = (linkedList, startBoundary, endBoundary) => {
    if (!linkedList.head) {
        return ('Empty Linked List');
    }


    let current;
    let firstPortion;
    let lastPortion;

    let firstNode;
    let lastNode;
    //      1              4
    // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 
    while (endBoundary > startBoundary) {
        current = linkedList.head;

        for (let i = 0; i <= endBoundary; i++) {
            if(i==startBoundary && current){
                firstPortion = current.value;
            }

            if(i==endBoundary && current){
                lastPortion = current.value;
            }
            
            if(current === null || current === undefined){
                return('Invalid Portion');
            }
            
            current = current.next;
        }

        current = linkedList.head;
        for (let i = 0; i <= endBoundary; i++) {
            if(i==startBoundary && current){
                current.value = lastPortion;
            }

            if(i==endBoundary && current){
                current.value = firstPortion;
            }
            
            
            current = current.next;
        }

       
        endBoundary-=1;
        startBoundary+=1;
    }


    return(linkedList.toString());

}


module.exports = reversePortion;