
'use strict';

let leafArr = [];
let numberOfPassed = 0;

let checkLeaf = (tree1, tree2) => {
    if(!tree1.root || !tree2.root){
        return("Empty Tree");
    }

    addMyLeaf(tree1.root);

    let result = compareFun(tree2.root);

    // console.log(numberOfPassed);
    // console.log(leafArr.length);

    return(result);
}


let addMyLeaf = node => {
    // preOrder Traversal
    if(!node.left && !node.right){
        leafArr.push(node.value);
    }

    if(node.left){
        addMyLeaf(node.left);
    }
    if(node.right){
        addMyLeaf(node.right);
    }
}

let compareFun = node => {
    let returnBolean = true;
    
    if(!node.left && !node.right){
        numberOfPassed+=1;
        returnBolean = leafArr.includes(node.value)
    }

    if(node.left){
        returnBolean = compareFun(node.left);
    }
    if(node.right){
        returnBolean = compareFun(node.right);
    }

    return(returnBolean);
}


module.exports = checkLeaf;