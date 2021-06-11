class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2)
    if (this.values[index] > this.values[parentIndex]) {
      [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
      this.bubbleUp(parentIndex);
    }
    return this;
  }

  extractMax() {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    let max = this.values.pop();
    this.bubbleDown(0);
    return max;
  }

  bubbleDown(index) {
    let val = this.values[index];
    let left = this.values[(index * 2) + 1] ? this.values[(index * 2) + 1] : 0;
    let right = this.values[(index * 2) + 2] ? this.values[(index * 2) + 2] : 0;
    if (left > right && left > val) {
      this.values[index] = left;
      this.values[(index * 2) + 1] = val;
      this.bubbleDown((index * 2) + 1);
    }
    if (right > left && right > val) {
      this.values[index] = right;
      this.values[(index * 2) + 2] = val;
      this.bubbleDown((index * 2) + 2);
    }
    return this;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(12);
heap.insert(13);
heap.insert(19);
heap.insert(2);
heap.insert(15);
heap.insert(6);
heap.insert(26);
heap.insert(36);
heap.insert(46);
heap.insert(56);
heap.insert(66);
heap.insert(1);
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
/*
bubbleUp() {
  let index = this.values.length - 1;
  while (index > 0) {
    let val = this.values[index];
    let parentIndex = Math.floor((index - 1) / 2)
    let parent = this.values[parentIndex];
    if (val <= parent) {
      break;
    }
    this.values[parentIndex] = val;
    this.values[index] = parent;
    index = parentIndex
  }
  return this;
}
*/
/*
bubbleDown() {
  let index = 0;
  let val = this.values[0];
  let swap = true;
  while (swap) {
    let leftIndex = 2 * index + 1;
    let rightIndex = 2 * index + 2;
    let left;
    let right;
    swap = null;
    if (leftIndex < this.values.length) {
      left = this.values[leftIndex];
      if (left > val) {
        swap = leftIndex;
      }
      if (rightIndex < this.values.length) {
        right = this.values[rightIndex];
        if ((!swap && right > val) || (swap && right > left)) {
          swap = rightIndex;
        }
      }
      this.values[index] = this.values[swap];
      this.values[swap] = val;
      index = swap;
    }
  }
}
*/