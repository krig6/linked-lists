# Project: Linked List

Welcome to the LinkedList project! 🎉 This project implements a simple LinkedList data structure in JavaScript, providing methods to manipulate and interact with the list.

## Features

- **LinkedList Operations**: Includes methods such as `append`, `prepend`, `insertAt`, `removeAt`, `pop`, and more.

- **Node-based structure**: Each node contains a value and a reference to the next node.

- **Customizable and Extendable**: The project structure allows for easy addition of new methods or modifications to the existing ones.

## Getting Started

Follow these steps to get started with the LinkedList project:

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies

To install the necessary dependencies, run:

```bash
npm install
```

### 3. Start Testing

```bash
npm run start
```

This will execute the tests defined in `index.js` and log the results.

## Project Structure

```
.
├── src/                   # Source files
│   ├── classes/           # Contains the LinkedList and Node classes
│   │   ├── LinkedList.js  # The LinkedList class
│   │   └── Node.js        # The Node class
│   ├── index.js           # Main entry point to test the LinkedList methods
│   └── styles/            # Optional CSS or styles for UI
├── .eslintrc.json         # ESLint configuration for code linting
├── .gitignore             # Specifies files to ignore in version control
├── .prettierrc.json       # Prettier configuration for code formatting
├── README.md              # Project documentation
├── package.json           # Project metadata and dependencies
└── webpack.config.js      # Webpack configuration file
```

## Methods

- `append(value)`: Adds a node with the given value to the end of the list.

- `prepend(value)`: Adds a node with the given value to the beginning of the list.

- `insertAt(value, index)`: Inserts a new node with the specified value at the given index.

- `removeAt(index)`: Removes the node at the specified index.

- `pop()`: Removes the last node from the list.

- `contains(value)`: Checks if the list contains a node with the given value.

- `find(value)`: Returns the index of the node containing the given value.

- `toString()`: Returns a string representation of the list.

## Customization

You can extend the `LinkedList` class by adding new methods or adjusting the existing ones to suit your needs. Feel free to modify the `Node` class or add additional functionality.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the issues page if you want to contribute.
