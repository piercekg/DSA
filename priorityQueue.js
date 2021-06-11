class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);
    let bubble = (index) => {
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.values[parentIndex] && this.values[index].priority < this.values[parentIndex].priority) {
        [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
        bubble(parentIndex);
      }
      return;
    }
    bubble(this.values.length - 1);
  }

  dequeue() {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    let top = this.values.pop();
    let bubble = (index) => {
      let val = this.values[index];
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let left = this.values[leftIndex] ? this.values[leftIndex] : {val: null, priority: Infinity};
      let right = this.values[rightIndex] ? this.values[rightIndex] : {val: null, priority: Infinity};
      if (left.priority < right.priority &&  left.priority < val.priority) {
        [this.values[index], this.values[leftIndex]] = [this.values[leftIndex], this.values[index]];
        bubble(leftIndex);
      }
      if (right.priority < left.priority && right.priority < val.priority) {
        [this.values[index], this.values[rightIndex]] = [this.values[rightIndex], this.values[index]];
        bubble(rightIndex);
      }
    }
    bubble(0);
    return top;
  }
}

let queue = new PriorityQueue();
queue.enqueue('pizza', 6);
queue.enqueue('taco', 5);
queue.enqueue('hotdog', 4);
queue.enqueue('ice cream', 3);
queue.enqueue('fish', 1);
queue.enqueue('taco', 2);
console.log(queue.dequeue());
console.log(queue);