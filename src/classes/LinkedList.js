import Node from './Node.js';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Adds a new node containing value to the end of the list
  append(value) {
    const validatedValue = this._validateValue(value)
    const newNode = new Node(validatedValue);

    if (this.contains(validatedValue)) {
      throw new Error("That is a duplicate!")
    }

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head
    } else {
      this.tail.nextNode = newNode
      this.tail = newNode
    }

    this.size++;
    return newNode
  }

  // Adds a new node containing value to the start of the list
  prepend(value) {
    const validatedValue = this._validateValue(value)
    const newNode = new Node(validatedValue);

    if (this.contains(validatedValue)) {
      throw new Error("That is a duplicate!")
    }

    if (this.head === null) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.nextNode = this.head
      this.head = newNode
    }

    this.size++
    return newNode
  }

  // Returns the total number of nodes in the list
  getSize() {
    return this.size;
  }

  // Returns the first node in the list
  getHead() {
    return this.head;
  }

  // Returns the last node in the list
  getTail() {
    return this.tail;
  }

  // Returns the node at the given index
  at(index) {
    const validatedIndex = this._validateValue(index)

    if (validatedIndex < 0 || validatedIndex >= this.size) {
      throw new Error("Out of bounds.")
    }

    let currentNode = this.head;

    for (let i = 0; i < validatedIndex; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  // Removes the last node from the list
  pop() {
    if (this.head === null) {
      throw new Error("List is empty.");
    }

    let oldTail;

    if (this.size === 1) {
      oldTail = this.head
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode !== this.tail) {
        currentNode = currentNode.nextNode;
      }

      oldTail = this.tail;
      currentNode.nextNode = null;
      this.tail = currentNode;
    }

    this.size--;
    return `Removed ${oldTail.value}`;
  }

  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    const validatedValue = this._validateValue(value);

    if (this.head === null) return false;

    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === validatedValue) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  // Returns the index of the node containing value, or null if not found
  find(value) {
    const validatedValue = this._validateValue(value);

    if (this.head === null) return null;

    let currentNode = this.head;

    for (let i = 0; currentNode !== null; i++) {
      if (currentNode.value === validatedValue) {
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

  _validateValue(value) {
    if (value === undefined || value === null) {
      throw new Error("Value cannot be null or undefined.")
    }

    if (typeof value === 'number') return value

    if (typeof value === 'string') {
      let trimmedValue = value.trim()
      if (trimmedValue === "") {
        throw new Error("Value cannot be empty.")
      }
      const numeric = Number(trimmedValue)
      if (isNaN(numeric)) {
        throw new Error("Value must be a valid number.")
      }
      return numeric
    }
    throw new Error("Value must be a number or a string.")
  }

}

export default LinkedList;
