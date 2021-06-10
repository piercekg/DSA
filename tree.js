class Tree {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
  addChild(val) {
    let node = new Tree(val);
    this.children.push(node);
  }

  breadthFirstSearch() {
    let queue = [];
    let visited = [];
    let node = this;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      if (node.children.length) {
        queue = queue.concat(node.children);
      }
      visited.push(node.val);
    }
    return visited;
  }

  preOrder() {
    let visited = [];
    let traverse = function(node) {
      visited.push(node.val);
      if (node.children.length) {
        for (let child of node.children) {
          traverse(child);
        }
      }
    }
    traverse(this);
    return visited;
  }

  postOrder() {
    let visited = [];
    let traverse = function(node) {
      if (node.children.length) {
        for (let child of node.children) {
          traverse(child);
        }
      }
      visited.push(node.val);
    }
    traverse(this);
    return visited;
  }
}

let tree = new Tree(1);
tree.addChild(2);
tree.addChild(3);
tree.addChild(4);
tree.children[0].addChild(5)
tree.children[0].addChild(6)
tree.children[1].addChild(7)
tree.children[1].addChild(8)
tree.children[2].addChild(9)
tree.children[2].addChild(0)
console.log(tree.postOrder());