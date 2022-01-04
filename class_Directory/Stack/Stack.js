
'use strict';

//  Here you can find linked list class with all methods given to be solved 

let Node = require("../Linked_List/Node")

class Stack{
    constructor(){
        this.top = null
    }

    // push method to add new node to our linked list
    push = (value) => {
        let node = new Node(value);
        if(!this.top){
            this.top = node;

            return("Added the first node");
        }

        node.next = this.top;
        this.top = node;
        return("Added new node successfully");
    }
    

    pop = () => {
        if(!this.top){
            return("Empty Stack");
        }

        let popEle = this.top;
        this.top = popEle.next;

        return(popEle.value);
    }

    peek = () => {
        if(!this.top){
            return("Empty Stack");
        }
        return(this.top.value);
    }


    isEmpty = () => {
        if(!this.top){
            return(true);
        }
        return(false);
    }


    toString = () => {
        if(!this.top){
            return("Empty Stack");
        }

        let current = this.top;
        let returnString = '';
        while(current){
            returnString = returnString + `${current.value} -> `;
            current = current.next;
        }
        returnString = returnString + "Null";

        return returnString;
    } 
}


module.exports = Stack;