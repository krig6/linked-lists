// Import the LinkedList class
import LinkedList from './classes/LinkedList.js';

// Create a new LinkedList
const list = new LinkedList();

// append() method
console.log('Appending 10 to the list...');
list.append(10);
console.log(list.toString()); // Expected: ( 10 ) -> null

console.log('Appending 20 to the list...');
list.append(20);
console.log(list.toString()); // Expected: ( 10 ) -> ( 20 ) -> null

// prepend() method
console.log('Prepending 5 to the list...');
list.prepend(5);
console.log(list.toString()); // Expected: ( 5 ) -> ( 10 ) -> ( 20 ) -> null

// printSize() method
console.log('Size of the list:', list.printSize()); // Expected: 3

// printHead() method
console.log('Head of the list:', list.printHead()); // Expected: Node { value: 5, nextNode: Node { value: 10, nextNode: [Node] } }

// printTail() method
console.log('Tail of the list:', list.printTail()); // Expected: Node { value: 20, nextNode: null }

// insertAt() method (Insert at index 1)
console.log('Inserting 15 at index 1...');
list.insertAt(15, 1);
console.log(list.toString()); // Expected: ( 5 ) -> ( 15 ) -> ( 10 ) -> ( 20 ) -> null

// removeAt() method (Remove at index 2)
console.log('Removing node at index 2...');
list.removeAt(2);
console.log(list.toString()); // Expected: ( 5 ) -> ( 15 ) -> ( 20 ) -> null

// pop() method (Remove the last node)
console.log('Popping the last node...');
list.pop();
console.log(list.toString()); // Expected: ( 5 ) -> ( 15 ) -> null

// contains() method (Check if the list contains a value)
console.log('Does the list contain 15?', list.contains(15)); // Expected: true
console.log('Does the list contain 10?', list.contains(10)); // Expected: false

// find() method (Find the index of a value)
console.log('Index of 15 in the list:', list.find(15)); // Expected: 1
console.log('Index of 10 in the list:', list.find(10)); // Expected: null

// toString() method
console.log('String representation of the list:', list.toString()); // Expected: ( 5 ) -> ( 15 ) -> null
