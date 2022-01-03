
'use strict';

// Given k sorted linked lists, merge them into a single list in increasing order.

let Linked_List = require('../../class_Directory/Linked_List/Linked_List')

let mergeKLists = (listArr) => {
    if (listArr.length === 0) {
        return ("You Should pass K non-Empty linked lists");
    }

    let currentValues = [];
    let resultLinkedList = new Linked_List();
    let testValue = listArr[0].head;

    let indexInList = 0;

    let lengthBefore = 0;
    while (testValue || (lengthBefore!==currentValues.length)) {

        for (let index=0;index < listArr.length;index++) {
            
            testValue = listArr[index].head;

            lengthBefore = currentValues.length;

            for (let i = 0; i < indexInList; i++) {
                if (testValue.next) {
                    testValue = testValue.next;
                } else {
                    testValue = null;
                    break;
                }
            }
            if (testValue) {
                currentValues.push(testValue.value);
            }
            
        }

        
        indexInList++;

    }


    for(let i=0;i<currentValues.length;i++){
        for(let j=i+1;j<currentValues.length;j++){
            if(currentValues[i]>currentValues[j]){
                let swapVal = currentValues[i];
                currentValues[i] = currentValues[j];
                currentValues[j]=swapVal;
            }
        }
    }

    for(let i=0;i<currentValues.length;i++){
        resultLinkedList.push(currentValues[i]);
    }


    if(resultLinkedList.head){
        return(resultLinkedList.toString());
    }else{
        return ("You Should pass K non-Empty linked lists");
    }

}

module.exports = mergeKLists;