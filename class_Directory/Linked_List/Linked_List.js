
'use strict';

//  Here you can find linked list class with all methods given to be solved 

let Node = require("./Node")

class Linked_List{
    constructor(){
        this.head = null
    }

    // push method to add new node to our linked list
    push = (value) => {
        let node = new Node(value);

        if(!this.head){
            this.head = node;
            return(this.head.value);
        }

        let current = this.head;
        while(current.next){
            current=current.next;
        }
        current.next = node;
    }

    toString = () => {
        if(!this.head){
            return("Empty Linked List");
        }

        let current = this.head;
        let returnString = '';
        while(current){
            returnString = returnString + `${current.value} -> `;
            current = current.next;
        }
        returnString = returnString + "Null";

        return returnString;
    } 
}


module.exports = Linked_List;