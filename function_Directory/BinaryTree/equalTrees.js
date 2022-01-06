
'use strict';

let arrData = [];

let scanTree = (tree1, tree2) => {
    if(tree1.size == 0 || tree2.size ==0){
        return("Empty Tree");
    }
    if(tree1.size !== tree2.size){
        return(false);
    }

    saveData(tree1.root);
    return(checkData(tree2.root));
}

let saveData = node => {
    arrData.push(node.value);
    if(node.left){
        saveData(node.left);
    }
    if(node.right){
        saveData(node.right);
    }
}

let checkData = node => {
    let result = arrData.includes(node.value);
    if(node.left){
        result = result && checkData(node.left);
    }
    if(node.right){
        result = result && checkData(node.right);
    }

    return result
}


module.exports = scanTree;