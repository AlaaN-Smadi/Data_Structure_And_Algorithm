
'use strict';

let Node = require('./Node');

class BinaryTree {
    constructor() {
        this.root = null,
        this.size=0
    }

    // add new node
    add = (value) => {
        let node = new Node(value);
        this.size = this.size+1;

        if (!this.root) {
            this.root = node;

            return ("added");
        }
        let current = this.root;

        let recursiveAdd = (node, nodeToBeAdded) => {
            if (nodeToBeAdded.value > node.value) {
                if (node.right) {
                    recursiveAdd(node.right, nodeToBeAdded);
                } else {
                    node.right = nodeToBeAdded;
                }
            } else {
                if (node.left) {
                    recursiveAdd(node.left, nodeToBeAdded);
                } else {
                    node.left = nodeToBeAdded;
                }
            }
        }

        recursiveAdd(current, node);
        return ("added");
    }

    // boolean indicating whether or not the value is in the tree at least once.
    contains = (value) => {
        if (!this.root) {
            return ("Empty Tree");
        }
        let result = false;
        let search = node => {
            if (node.value == value) {
                result = true;
            }
            if (node.left) {
                search(node.left);
            } if (node.right) {
                search(node.right);
            }
        }
        search(this.root);
        return (result);
    }
}

module.exports = BinaryTree;