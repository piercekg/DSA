/*
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

  shortestPath(start, end) {
    let distances = {};
    let queue = new PriorityQueue();
    let previous = {};

    for (let i in this.adjacenyList) {
      if (i === start) {
        distances[i] = 0;
        queue.enqueue(i, 0);
      } else {
        distances[i] = Infinity;
        queue.enqueue(i, Infinity);
      }
      previous[i] = null;
    }

    let smallest;
    while (queue.values.length) {
      smallest = queue.dequeue().val;
      if (smallest === end) {
        let path = [];
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        console.log(path);
        return;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacenyList[smallest]) {
          let next = this.adjacenyList[smallest][neighbor];
          console.log(next);
          let distance = distances[smallest] + next.weight;
          let fuck = next.node;
          if (distance < distances[fuck]) {
            distances[fuck] = distance;
            previous[fuck] = smallest;
            queue.enqueue(next, distance);
          }
        }
      }
    }
  }
}
*/
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}


let graph = new WeightedGraph();
graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addVertex('d');
graph.addVertex('e');
graph.addVertex('f');
graph.addEdge('a', 'b', 4);
graph.addEdge('a', 'c', 2);
graph.addEdge('b', 'e', 3);
graph.addEdge('c', 'd', 2);
graph.addEdge('c', 'f', 4);
graph.addEdge('d', 'e', 3);
graph.addEdge('d', 'f', 1);
graph.addEdge('e', 'f', 1);
console.log(graph.Dijkstra('a', 'e'));

/*
var q = new PriorityQueue();
q.enqueue('b', 9);
q.enqueue('c', 5);
q.enqueue('d', 7);
q.enqueue('e', 3);
console.log(q);
*/