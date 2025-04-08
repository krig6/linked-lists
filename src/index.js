class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
    this.size++;
  }

  // Adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      newNode.nextNode = currentNode;
      this.head = newNode;
    }
    this.size++;
  }

  // Returns the total number of nodes in the list
  printSize() {
    return this.size;
  }
}
