
'use strict';

// Reverse a string using a stack data structure

let Linked_List = require('../../class_Directory/Stack/Stack');

let reverseStr = (str) => {
    if (str.length == 0) {
        return ("Empty String");
    }
    let strList = new Linked_List();

    for (let i = 0; i < str.length; i++) {
        strList.push(str[i]);
    }
    str = '';

    while (strList.top) {
        str = str + strList.pop();
    }

    return (str);
}

module.exports = reverseStr;