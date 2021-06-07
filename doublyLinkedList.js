class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      node.prev = this.tail;
      this.tail = node;
    }
    this.length ++;
    return this;
  }

  pop() {
    if (!this.tail) {
      return undefined;
    }
    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length --;
    return popped;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
      shifted.next = null;
    }
    this.length --;
    return shifted;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length ++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }
    let current;
    if (index <= Math.floor(this.length / 2)) {
      let i = 0;
      current = this.head;
      while (i < index) {
        current = current.next;
        i ++;
      }
    } else {
      let i = this.length - 1;
      current = this.tail;
      while (i > index) {
        current = current.prev;
        i --;
      }
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
    let node = new Node(value);
    let prev = this.get(index - 1);
    let next = prev.next;
    prev.next = node;
    node.prev = prev;
    node.next = next;
    next.prev = node;
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
      return this.pop();
    }
    let removed = this.get(index);
    let prev = removed.prev;
    let next = removed.next;
    prev.next = next;
    next.prev = prev;
    removed.next = null;
    removed.prev = null;
    this.length --;
    return removed;
  }
}

let list = new DoublyLinkedList();
list.push(3);
//console.log(list);
list.push(7);
list.push(8);
//console.log(list.shift())
list.unshift(5);
list.unshift(6);
list.unshift(4);
list.unshift(9);
//console.log(list.insert(5, 1));
console.log(list.remove(28))