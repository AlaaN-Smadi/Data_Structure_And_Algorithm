
'use strict';

// Given a stack, sort it using recursion. The use of any other data structures 
// (like containers in STL or Collections in Java) is not allowed.

let sortRecursively = (stack) => {
    if(!stack.top){
        return("Empty Stack");
    }

    let test = recursiveFun1(stack.top);
    stack.top = test;

    // console.log(stack.toString());
    return(stack.toString());
}



    
let recursiveFun1 = (node) => {
    if(node.next){
        recursiveFun1(node.next);
    }
    
    node.value = recursiveFun2(node, node.next);
    return(node);
}

// 1 - 2 - 2 - 1
let recursiveFun2 = (node, compareValues) => {
    if(compareValues){
        if(compareValues.next){
            recursiveFun2(node, compareValues.next);
        }
    }

    if(compareValues && node){
        if(node.value > compareValues.value){
            let swapVal = node.value;
            node.value = compareValues.value;
            compareValues.value = swapVal;
        }
    }
    return(node.value);
}

module.exports = sortRecursively;