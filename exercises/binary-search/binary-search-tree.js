class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Insert a value
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Search for a value
  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  // In-order traversal (sorted output)
  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  // Find the minimum value node (used for deletion)
  _findMin(node) {
    while (node.left) node = node.left;
    return node;
  }

  // Delete a value
  delete(value, node = this.root, parent = null) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.delete(value, node.left, node);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right, node);
    } else {
      // Node with only one child or no child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Node with two children: get inorder successor (min in right subtree)
      const minLargerNode = this._findMin(node.right);
      node.value = minLargerNode.value;
      node.right = this.delete(minLargerNode.value, node.right, node);
    }

    return node;
  }
}

const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

console.log("In-order Traversal:");
bst.inorder(); // Output: 3 5 7 10 12 15 18

console.log("Search 7:", bst.search(7)); // true
console.log("Search 20:", bst.search(20)); // false

bst.delete(10); // delete the root node (with two children)
console.log("After deleting 10:");
bst.inorder(); // Output: sorted tree without 10
