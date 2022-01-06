
'use strict';

let printTree = require('../../function_Directory/BinaryTree/printTree');
let BinaryTree = require('../../class_Directory/BinaryTree/BinaryTree');

//       10
//      /   \
//     5     15
//      \    / \
//       7  12  17
//           \
//            14


// (a) Inorder (Left, Root, Right) : 5 7 10 12 14 15 17
// (b) Preorder (Root, Left, Right) : 10 5 7 15 12 14 17
// (c) Postorder (Left, Right, Root) : 7 5 14 12 17 15 10
// Breadth-First or Level Order Traversal: 10 5 15 7 12 17 14

let myTree = new BinaryTree();
myTree.add(10);
myTree.add(5);
myTree.add(15);
myTree.add(7);
myTree.add(12);
myTree.add(17);
myTree.add(14);


describe("Binary Tree Print Functions", ()=> {
    test('InOrder Method => ', () => {
        expect(printTree.inOrder(myTree.root)).toStrictEqual(" -> 5 -> 7 -> 10 -> 12 -> 14 -> 15 -> 17");
    });

    test('PreOrder Method => ', () => {
        expect(printTree.preOrder(myTree.root)).toStrictEqual(" -> 10 -> 5 -> 7 -> 15 -> 12 -> 14 -> 17");
    });

    test('Post Order Method => ', () => {
        expect(printTree.postOrder(myTree.root)).toStrictEqual(" -> 7 -> 5 -> 14 -> 12 -> 17 -> 15 -> 10");
    });

    test('Bridth First Method => ', () => {
        expect(printTree.brifthFirst(myTree.root)).toStrictEqual(" -> 10 -> 5 -> 15 -> 7 -> 12 -> 17 -> 14");
    });

})