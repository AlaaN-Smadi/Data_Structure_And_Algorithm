
'use strict';

// Given k sorted linked lists, merge them into a single list in increasing order.

let Linked_List = require('../../class_Directory/Linked_List/Linked_List')

let mergeKLists = (firstLinkedList, secondLinkedList) => {
    if (firstLinkedList.head === null || secondLinkedList.head === null) {
        return ("You Should pass two non-Empty linked lists");
    }

    let resultList = new Linked_List();

    let currentFromFirst = firstLinkedList.head;
    let currentFromSecond = secondLinkedList.head;
    while (currentFromFirst) {
        if (currentFromFirst.value < currentFromSecond.value) {
            resultList.push(currentFromFirst.value);

            resultList.push(currentFromSecond.value);
        } else {
            resultList.push(currentFromSecond.value);
            resultList.push(currentFromFirst.value);
        }

        currentFromSecond = currentFromSecond.next;
        currentFromFirst = currentFromFirst.next;
    }

    while (currentFromSecond) {
        resultList.push(currentFromSecond.value);
        currentFromSecond = currentFromSecond.next;
    }

    return (resultList.toString());


}


module.exports = mergeKLists;