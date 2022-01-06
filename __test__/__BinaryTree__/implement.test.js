

'use strict';

let BinaryTree = require('../../class_Directory/BinaryTree/BinaryTree');

let myEmptyTree = new BinaryTree();

let myTree = new BinaryTree();

myTree.add(10);
myTree.add(15);
myTree.add(5);
myTree.add(7);

describe("Binary Tree Implementation", ()=> {
    test('it should add new node to the tree', () => {
        expect(myTree.add(12)).toStrictEqual("added");
    });
    
    test('it should check if node added or not', () => {
        expect(myTree.root.value).toStrictEqual(10);
        expect(myTree.root.left.right.value).toStrictEqual(7);
        expect(myTree.root.right.left.value).toStrictEqual(12);
    });

    test('it should check if node is in the tree or not', () => {
        expect(myTree.contains(10)).toBe(true);
        expect(myTree.contains(5)).toBe(true);
        expect(myTree.contains(152)).toBe(false);
        expect(myEmptyTree.contains(152)).toBe("Empty Tree");
        expect(myTree.contains(-42)).toBe(false);
    });

})