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

  preOrder() {
    let visited = [];
    let traverse = function(node) {
      visited.push(node.val);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return visited;
  }

  postOrder() {
    let visited = [];
    let traverse = function(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      visited.push(node.val);
    }
    traverse(this.root);
    return visited;
  }

  inOrder() {
    let visited = [];
    let traverse = function(node) {
      if (node.left) {
        traverse(node.left);
      }
      visited.push(node.val);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return visited;
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
console.log(tree.postOrder());