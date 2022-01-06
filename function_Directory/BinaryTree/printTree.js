
'use strict';

const Queue = require("../../class_Directory/Queue/Queue");

//       1
//      / \
//     2   3
//    / \   
//   4   5

// (a) Inorder (Left, Root, Right) : 4 2 5 1 3 
// (b) Preorder (Root, Left, Right) : 1 2 4 5 3 
// (c) Postorder (Left, Right, Root) : 4 5 2 3 1
// Breadth-First or Level Order Traversal: 1 2 3 4 5 


// left root right
let inOrder = (node) => {
    let result = '';

    let print = (node) => {
        if(node.left){
            print(node.left);
        }
        result = result + ' -> ' + `${node.value}`;
        if(node.right){
            print(node.right);
        }
        return(result);
    }

    print(node);
    return(result);    
}

// left right root
let postOrder = (node) => {
    let result = '';
    let print = node => {
        if(node.left){
            print(node.left);
        }
        if(node.right){
            print(node.right);
        }
        result = result + ' -> ' + `${node.value}`;
        return(result);
    }
    print(node);
    return result;
}

// root left right
let preOrder = (node) => {
    let result = '';
    let print = node => {
        result = result + ' -> ' + `${node.value}`;
        if(node.left){
            print(node.left);
        }
        if(node.right){
            print(node.right);
        }
        return(result);
    }
    print(node);
    return result;
}

let brifthFirst = (node) => {
    let result = '';
    let myQueue = new Queue();
    myQueue.enqueue(node);
    // console.log(myQueue.front.value);
    while(myQueue.front){
        let newFront = myQueue.front.value;
        if(newFront.left){
            myQueue.enqueue(newFront.left);
        }
        if(newFront.right){
            myQueue.enqueue(newFront.right);
        }
        result = result + ` -> ${myQueue.dequeue().value}`;
    }
    return result;
}


module.exports = {inOrder, postOrder, preOrder, brifthFirst};