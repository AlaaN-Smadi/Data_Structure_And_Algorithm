
'use strict';

// Given two trees with different shapes , check if these two trees are equal or not 


let scan = require('../../function_Directory/BinaryTree/equalTrees');
let BinaryTree = require('../../class_Directory/BinaryTree/BinaryTree');

let myEmptyTree = new BinaryTree();

let myFirstTree = new BinaryTree();
myFirstTree.add('a');
myFirstTree.add('b');
myFirstTree.add('c');

let mySecondTree = new BinaryTree();
mySecondTree.add('b');
mySecondTree.add('a');
mySecondTree.add('c');

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