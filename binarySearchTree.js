class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (current) {
        if (node.val === current.val) {
          return 'Duplicate value';
        }
        if (node.val > current.val) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            current = null;
          }
        } else if (node.val < current.val) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            current = null;
          }
        }
      }
    }
    return this;
  }

  contains(val) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    while (current) {
      if (val === current.val) {
        return true;
      }
      if (val < current.val) {
        current = current.left;
      }
      if (val > current.val) {
        current = current.right;
      }
    }
    return false;
  }
}

let tree = new BinarySearchTree();
console.log(tree.insert(5));
console.log(tree.insert(12));
console.log(tree.insert(2));
console.log(tree.insert(7));
console.log(tree.insert(3));
console.log(tree.insert(6));
console.log(tree.insert(4));
console.log(tree.find(13))