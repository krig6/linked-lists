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

  // Returns the first node in the list
  printHead() {
    return this.head;
  }

  // Returns the last node in the list
  printTail() {
    if (this.head === null) {
      return null;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  }

  // Returns the node at the given index
  at(index) {
    let count = 0;
    if (index < 0 || index >= this.size) return 'Invalid index.';
    if (this.head === null) {
      return null;
    } else {
      let currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.nextNode;
        count++;
      }
      return currentNode;
    }
  }

  // Removes the last node from the list
  pop() {
    if (this.head === null) return 'List is empty.';
    let currentNode = this.head;
    let previousNode = currentNode;
    while (currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = null;
    return `Removed ${currentNode.value}`;
  }

  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    if (this.head === null) return false;

    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  // Returns the index of the node containing value, or null if not found
  find(value) {
    if (this.head === null) return null;
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.nextNode;
    }
    return null;
  }
}
