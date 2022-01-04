
'use strict';

//  Here you can find linked list class with all methods given to be solved 

let Node = require("../Linked_List/Node")

class Queue {
    constructor() {
        this.front = null,
            this.back = null
    }

    // Add node to the back of the Queue
    enqueue = (value) => {
        let node = new Node(value);
        if (!this.front) {
            this.front = node;
            this.back = node;

            return ("Added First node successfully");
        }
        this.back.next = node;
        this.back = node;

        return ("Successfully Added");
    }

    // Remove node from the front of the Queue
    dequeue = () => {
        if (!this.front) {
            return ("Empty Queue");
        }
        let deletedNode = this.front;
        this.front = deletedNode.next;

        return (deletedNode.value);
    }

    peek = () => {
        if (!this.front) {
            return ("Empty Queue");
        }
        return (this.front.value);
    }

    isEmpty = () => {
        if (!this.front) {
            return (true);
        }
        return (false);
    }


    toString = () => {
        if(!this.front){
            return("Empty Queue");
        }

        let current = this.front;
        let returnString = '';
        while(current){
            returnString = returnString + `${current.value} -> `;
            current = current.next;
        }
        returnString = returnString + "Null";

        return returnString;
    } 
}


module.exports = Queue;