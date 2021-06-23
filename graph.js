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

  depthFirstRecursive(start) {
    let results = [];
    let visited = {};
    const helper = (vertex) => {
      if (!vertex) {
        return null;
      }
      results.push(vertex);
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return helper(neighbor);
        }
      });
    };
    helper(start);
    return results;
  }

  depthFirstIterative(start) {
    let stack = [start];
    let results = [];
    let visited = {};
    visited[start] = true;
    let vertex;
    while (stack.length) {
      vertex = stack.pop();
      results.push(vertex);
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
    return results;
  }

  breadthFirst(start) {
    let queue = [start];
    let results = [];
    let visited = {};
    visited[start] = true;
    let vertex;
    while (queue.length) {
      vertex = queue.shift();
      results.push(vertex);
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
    return results;
  }
}

let graph = new Graph();
graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addVertex('d');
graph.addVertex('e');
graph.addVertex('f');
graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('b', 'd');
graph.addEdge('c', 'e');
graph.addEdge('d', 'e');
graph.addEdge('d', 'f');
graph.addEdge('e', 'f');
//console.log(graph.depthFirstRecursive('d'));
console.log(graph.depthFirstIterative('a'));
console.log(graph.breadthFirst('a'));


/*
removeEdge(v1, v2) {
    let index = this.adjacencyList[v1].indexOf(v2);
    this.adjacencyList[v1].splice(index, 1);
    index = this.adjacencyList[v2].indexOf(v1);
    this.adjacencyList[v2].splice(index, 1);
  }
*/