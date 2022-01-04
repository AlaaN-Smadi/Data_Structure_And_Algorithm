
'use strict';

// Given a stack, recursively reverse it only using its abstract data type 
// (ADT) standard operations, i.e., push(item), pop(), peek(), isEmpty(), size(), etc.


// 1 - 2 - 3
// 

function reverseStack(stack){
    if(!stack.top){
        return("Empty Stack");
    }

    let valuesArr = [];

    let recursiveFun = (stack) => {
        let data = stack.pop();
        if(stack.top){
            recursiveFun(stack);
        }
        valuesArr.push(data);
    }

    recursiveFun(stack);
    for(let i=0;i<valuesArr.length;i++){
        stack.push(valuesArr[i]);
    }

    return(stack.toString());
}


module.exports = reverseStack;