/*
1. create a node first
2. create a binary search class with insert remove 
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    //root of a binary search tree
    this.root = null;
  }

  //function to be implemented helper method which creates a new node to be inserted and calls insertNode
  insert(data) {
    //creating a node and initialising with data
    const newNode = new Node(data);

    //if root is null then node will be added to the tree and made root
    if (this.root === null) {
      this.root = newNode;
    } else {
      //find the correct position in the tree and add the node
      this.insertNode(this.root, newNode);
    }
  }

  // Method to insert a node in a tree it moves over the tree to find the location to insert a node with a given data.
  insertNode(node, newNode) {
    //if the data is less than the node data move left of the tree
    if (newNode.data < node.data) {
      //if left is null insert node here
      if (node.left === null) {
        node.left = newNode;
      } else {
        // if left is not null recur until null is found
        this.insertNode(node.left, newNode);
      }
    }
    // if the data is more than the node data move right of the tree
    else {
      //if right is null insert node here
      if (node.right === null) {
        node.right = newNode;
      } else {
        // if right is not null recur until null is found
        this.insertNode(node.right, newNode);
      }
    }
  }
}

const BST = new BinarySearchTree();
BST.insert(1);
BST.insert(2);
BST.insert(8);
BST.insert(4);
BST.insert(5);

console.log(JSON.stringify(BST.root, null, 2));
