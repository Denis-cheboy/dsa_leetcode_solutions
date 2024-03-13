// It uses sorting based on weight and DSU

class Graph {
    constructor() {
      this.vertices = [];
      this.edges = [];
    }
  
    addVertex(vertex) {
      this.vertices.push(vertex);
    }
  
    addEdge(vertex1, vertex2, weight) {
      this.edges.push({ vertex1, vertex2, weight });
    }
  
    find(parent, vertex) {
      if (parent[vertex] !== vertex) {
        parent[vertex] = this.find(parent, parent[vertex]);
      }
      return parent[vertex];
    }
  
    union(parent, rank, vertex1, vertex2) {
      const root1 = this.find(parent, vertex1);
      const root2 = this.find(parent, vertex2);
  
      if (rank[root1] < rank[root2]) {
        parent[root1] = root2;
      } else if (rank[root1] > rank[root2]) {
        parent[root2] = root1;
      } else {
        parent[root2] = root1;
        rank[root1]++;
      }
    }
  
    kruskal() {
      const sortedEdges = this.edges.sort((a, b) => a.weight - b.weight);
      const parent = {};
      const rank = {};
  
      for (const vertex of this.vertices) {
        parent[vertex] = vertex;
        rank[vertex] = 0;
      }
  
      const minimumSpanningTree = [];
  
      for (const edge of sortedEdges) {
        const { vertex1, vertex2, weight } = edge;
  
        if (this.find(parent, vertex1) !== this.find(parent, vertex2)) {
          minimumSpanningTree.push(edge);
          this.union(parent, rank, vertex1, vertex2);
        }
      }
  
      return minimumSpanningTree;
    }
  }
  
  // Example usage:
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
  
  const minimumSpanningTree = graph.kruskal();
  console.log(minimumSpanningTree);