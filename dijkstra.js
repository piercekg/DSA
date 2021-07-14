class WeightedGraph {
  constructor() {
    this.adjacenyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacenyList[vertex]) {
      this.adjacenyList[vertex] = [];
    }
  }

  addEdge(v1, v2, w) {
    this.adjacenyList[v1].push({node: v2, weight: w});
    this.adjacenyList[v2].push({node: v1, weight: w});
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => {
      return a.priority - b.priority
    });
  }
}

let graph = new WeightedGraph();
graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addEdge('a', 'b', 9);
graph.addEdge('a', 'c', 5);
graph.addEdge('b', 'c', 7);
console.log(graph.adjacenyList);

var q = new PriorityQueue();
q.enqueue('b', 9);
q.enqueue('c', 5);
q.enqueue('d', 7);
q.enqueue('e', 3);
console.log(q);