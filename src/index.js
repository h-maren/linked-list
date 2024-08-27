import './style.css';
import { Node } from './node.js';
import { LinkedList } from './linkedlist.js';

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("turtle");

const listtwo=new LinkedList();
listtwo.prepend("blue");
listtwo.prepend("red");
listtwo.prepend("black");
console.log(listtwo.size);
console.log(listtwo.head);
console.log(listtwo.tail);

console.log(list.toString());

console.log("testing!");
