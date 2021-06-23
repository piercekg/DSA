class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      vertex => vertex !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      vertex => vertex !== v1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      this.removeEdge(vertex, this.adjacencyList[vertex].pop());
    }
    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();
graph.addVertex('pizza');
graph.addVertex(12);
graph.addVertex(13);
graph.addEdge('pizza', 12);
graph.addEdge('pizza', 13);
graph.addEdge(13, 12);
console.log(graph);
graph.removeVertex('pizza');
console.log(graph);

/*
removeEdge(v1, v2) {
    let index = this.adjacencyList[v1].indexOf(v2);
    this.adjacencyList[v1].splice(index, 1);
    index = this.adjacencyList[v2].indexOf(v1);
    this.adjacencyList[v2].splice(index, 1);
  }
*/