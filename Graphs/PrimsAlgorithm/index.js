// Its used to find the minimum spanning tree
// A spanning tree is graph with n vertices connected strongly by n-1 edges without a cycle
// Prims algorithm works in a greedy manner by always picking the smallest connected edge weight from the current
// It uses priority queue to speed up the process by always picking the small edge weight
// Runs in O(EV) but with a priority queue, its runs in O(ElogV)
// When implemted manually, runs in O(n^2) with a time Complexity of O(E+V)
// Works for undirected graph

class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element, priority) {
      const queueElement = { element, priority };
  
      if (this.isEmpty()) {
        this.queue.push(queueElement);
      } else {
        let added = false;
        for (let i = 0; i < this.queue.length; i++) {
          if (queueElement.priority < this.queue[i].priority) {
            this.queue.splice(i, 0, queueElement);
            added = true;
            break;
          }
        }
        if (!added) {
          this.queue.push(queueElement);
        }
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.queue.shift();
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  }

class Graph{
    constructor(){
        this.vertices=[]
        this.edges={}
    }

    addVertex(vertex){
        this.vertices.push(vertex)
        this.edges[vertex]=[]
        
    }
    

    addEdge(vertex1,vertex2,weight){
        this.edges[vertex1].push({vertex:vertex2,weight:weight})
        this.edges[vertex2].push({vertex:vertex1,weight:weight})
    }

    prim(){
        const visited={}
        const minimumSpanningTree=[]
        const startVertex=this.vertices[0]
        visited[startVertex]=true

        while(Object.keys(visited).length<this.vertices.length){
            let minEdge=null

            for(const vertex in visited){
                const edges=this.edges[vertex]

                for(const edge of edges){
                    if(!visited[edge.vertex] && (!minEdge || edge.weight<minEdge.weight)){
                        minEdge={vertex1:vertex,vertex2:edge.vertex,weight:edge.weight}
                    }
                }
            }
            minimumSpanningTree.push(minEdge)
            visited[minEdge.vertex2]=true
        }

        return minimumSpanningTree
    }

    
  primWitPriority() {
    const visited = {};
    const minimumSpanningTree = [];
    const startVertex = this.vertices[0];
    visited[startVertex] = true;

    const priorityQueue = new PriorityQueue();
    this.edges[startVertex].forEach(edge => {
      priorityQueue.enqueue(edge, edge.weight);
    });

    while (!priorityQueue.isEmpty() && Object.keys(visited).length < this.vertices.length) {
      const { element: minEdge, priority } = priorityQueue.dequeue();

      if (!visited[minEdge.vertex]) {
        minimumSpanningTree.push(minEdge);
        visited[minEdge.vertex] = true;

        this.edges[minEdge.vertex].forEach(edge => {
          if (!visited[edge.vertex]) {
            priorityQueue.enqueue(edge, edge.weight);
          }
        });
      }
    }

    return minimumSpanningTree;
  }
}



const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');


graph.addEdge('A', 'B', 2);
graph.addEdge('A', 'C', 3);
graph.addEdge('B', 'D', 4);
graph.addEdge('C', 'D', 1);
graph.addEdge('C', 'E', 5);
graph.addEdge('D', 'E', 6);
graph.addEdge('D', 'F', 7);
graph.addEdge('E', 'F', 8);

const minimumSpanningTree = graph.primWitPriority();
console.log(minimumSpanningTree);

