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
        this.tail = newNode;
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
        newNode.nextNode = this.head;
        this.head = newNode;
        this.size++;
        console.log(newNode);
        console.log(this);
    };
    at(index){
        let currentNode=this.head;
        console.log(currentNode);
        let count=0;
        while(currentNode){
            if(count===index){
                return currentNode;
            }
            count++;
            console.log(count);
            currentNode=currentNode.nextNode;
            console.log(currentNode);
        };
    };
    pop () {
        let currentNode=this.tail;
        return currentNode;
    };
    contains (value) {
        let currentNode=this.head;
        let count=0;
        while(currentNode){
            if(value===currentNode.data){
                return true;
            }
            count++;
            currentNode=currentNode.nextNode;
        };
        return false;
    };
    find (value) {
        let currentNode=this.head;
        let count=0;
        while(currentNode){
            if(value===currentNode.data){
                return count;
            }
            count++;
            currentNode=currentNode.nextNode
        };
        return null;
    };
    toString(){

    };
};

export {LinkedList}