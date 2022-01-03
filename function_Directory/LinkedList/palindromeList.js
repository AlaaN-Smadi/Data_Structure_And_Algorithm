
'use strict';

// Given a linked list of characters, recursively check if it is palindrome or not.

// a -> b -> c -> d
let palindrome = (node, s1, s2) => {

    if (node) {
        s1 = s1 + `${node.value} -> `;
        let a = palindrome(node.next, s1, s2);
        
        s1 = a.s1;
        s2 = a.s2;

    }



    if (node) {
        s2 = s2 + `${node.value} -> `;
    }


    return ({ s1, s2 });
}

let testPalindromList = (linkedList) => {

    if (!linkedList.head) {
        return ("Empty Linked List");
    }

    let s1 = '',
        s2 = '';

    let result = palindrome(linkedList.head, s1, s2);

    return (result.s1 == result.s2);
}

module.exports = testPalindromList;