class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length ++;
    return this;
  }

  pop() {
    if (!this.length) {
      return undefined;
    }
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length --;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.length) {
      return undefined;
    }
    let shifted = this.head;
    this.head = this.head.next;
    this.length --;
    if (!this.length) {
      this.tail = null;
    }
    return shifted;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length ++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return undefined
    }
    let i = 0;
    let current = this.head;
    while (i < index) {
      current = current.next;
      i ++;
    }
    return current;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(value);
    }
    if (index === this.length) {
      return !!this.push(value);
    }
    let prev = this.get(index - 1);
    let node = new Node(value);
    node.next = prev.next;
    prev.next = node;
    this.length ++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop()
    }
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length --;
    return removed;
  }

  reverse() {
    if (!this.length) {
      return undefined;
    }
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next;
    for (var i = 0; i < this.length; i ++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}
/*
var list = new SinglyLinkedList();
list.push(7);
list.push(8);
//console.log(list.pop());
//console.log(list);
list.unshift(5);
//console.log(list.shift());
//console.log(list.shift());
//console.log(list.pop());
console.log(list);
console.log(list.reverse());
*/