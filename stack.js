class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size ++;
    return this.size;
  }
  pop() {
    if (!this.first) {
      return null;
    }
    let popped = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = popped.next;
    popped.next = null;
    this.size --;
    return popped.val;
  }
}

let stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.pop());
console.log(stack.pop());

/*
// Array implementation
class Stack {
  constructor() {
    this.storage = [];
  }
  push(item) {
    this.storage.push(item);
    return this;
  }
  pop() {
    return this.storage.pop();
  }
  size() {
    return this.storage.length;
  }
}
*/
