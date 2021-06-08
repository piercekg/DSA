class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size ++;
    return this.size;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    let dequeued = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = dequeued.next;
    dequeued.next = null;
    this.size --;
    return dequeued.val;
  }
}

let queue = new Queue;
console.log(queue.enqueue(5));
console.log(queue.enqueue(7));
console.log(queue.dequeue());
console.log(queue.dequeue());