
'use strict';

// Given two binary trees, check whether the leaf traversals of both trees are the same or not.


let scan = require('../../function_Directory/BinaryTree/checkLeaf');
let BinaryTree = require('../../class_Directory/BinaryTree/BinaryTree');

let myEmptyTree = new BinaryTree();

let myFirstTree = new BinaryTree();
myFirstTree.add('g');
myFirstTree.add('b');
myFirstTree.add('c');
myFirstTree.add('a');
myFirstTree.add('j');
myFirstTree.add('i');
myFirstTree.add('k');


//         g
//        / \ 
//       b    j
//      / \   /\
//     a  c  i  k 

let mySecondTree = new BinaryTree();
mySecondTree.add('g');
mySecondTree.add('b');
mySecondTree.add('j');
mySecondTree.add('h');
mySecondTree.add('c');
mySecondTree.add('k');
mySecondTree.add('i');

//          g
//        /   \
//       b     j
//      / \   / \
//     a  c   h  k
//             \  
//              i

let myThirdTree = new BinaryTree();
myThirdTree.add('a');
myThirdTree.add('R');
myThirdTree.add('s');
myThirdTree.add('b');



describe("Check if two Binary Tree equals or not", ()=> {
    test('Empty Tree => ', () => {
        expect(scan(myEmptyTree,myEmptyTree)).toStrictEqual("Empty Tree");
    });

    test('Equal Trees => ', () => {
        expect(scan(mySecondTree, myFirstTree)).toStrictEqual(true);
        expect(scan(myFirstTree, mySecondTree)).toStrictEqual(true);
    });

    test('Non Equal trees => ', () => {
        expect(scan(mySecondTree,myThirdTree)).toStrictEqual(false);
    });

})