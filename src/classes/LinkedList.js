import Node from './Node.js';

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

    if (this.head.nextNode === null) {
      const removedValue = this.head.value;
      this.head = null;
      this.size--;
      return `Removed ${removedValue}`;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    previousNode.nextNode = null;
    this.size--;
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

  // Represents your LinkedList objects as strings, so you can prin them out and preview them in the console
  // Format : ( value ) -> ( value ) -> null
  toString() {
    if (this.head === null) return null;
    let string = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    string += 'null';
    return string;
  }

  // Inserts a new node with the provided value at the given index
  insertAt(value, index) {
    if (index < 0 || index > this.size) return 'Invalid index.';

    if (this.head === null && index === 0) {
      return this.append(value);
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      let currentNode = this.head;
      let previousNode = null;
      let count = 0;
      while (count !== index) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
        count++;
      }
      previousNode.nextNode = newNode;
      newNode.nextNode = currentNode;
      this.size++;
    }
    return this.head;
  }

  // Removed node at the given index
  removeAt(index) {
    if (index < 0 || index >= this.size) return 'Invalid index.';
    if (this.size === 0) return 'List is empty.';

    if (index === 0) {
      let removedNode = this.head;
      if (this.size === 1) {
        this.head = null;
      } else {
        this.head = this.head.nextNode;
      }
      this.size--;
      return removedNode.value;
    }

    let currentNode = this.head;
    let previousNode = null;
    let count = 0;

    while (count !== index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      count++;
    }

    previousNode.nextNode = currentNode.nextNode;
    this.size--;
    return currentNode.value;
  }
}

export default LinkedList;
