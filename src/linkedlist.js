import { Node } from './node.js';

class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };
    append(value) {
        let newNode = new Node(value);
        console.log(this);
        console.log(newNode.data);
        if(this.head === null){
           this.head = newNode;
           this.tail = newNode;
           console.log("head was equal to null");
           this.size++;
           return;
        }
        let current = this.head;
        console.log(current);
        while(current.nextNode !== null) {
            current=current.nextNode;
            console.log(current);
        }
        current.nextNode = newNode;
        console.log("ran once!");
        this.size++;
    };
    prepend(value){
        let newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            console.log("head was equal to null");
            this.size++;
            return;
        }
        newNode.next = this.head;
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        console.log(newNode);
        console.log(this);
    };
};

export {LinkedList}