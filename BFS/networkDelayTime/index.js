// BellMans Ford algorithm
const network=(times,n,k)=>{

    const time=Array(n+1).fill(Infinity)

    time[k]=0

    for (const [u, v, t] of times) {
        if (time[u] === Infinity) continue;
        if (time[v] > time[u] + t) {
          time[v] = time[u] + t;
        }
      }

    let res=0

    for(let i=1;i<=n;i++){
        res=Math.max(res,time[i])
    }

    return res===Infinity?-1:res


}
// Dijkistra Algorithm using priority queue
class QElement { 
    constructor(element, priority) 
    { 
        this.element = element; 
        this.priority = priority; 
    } 
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(element, priority) {
        var qElement = new QElement(element, priority); 
        var contain = false; 
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.items.push(qElement);
        }
    }
    dequeue() {
        if (this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    }
    isEmpty() {
        return this.items.length == 0;
    }
}
    

class Graph {
    constructor(N) {
        this.num_vertices = N;
        this.AdjList = new Map();
    }
    addVertex(v) {
        this.AdjList.set(v, []);
    }
    addEdge(x, y, wt) {
        this.AdjList.get(x).push({node: y, wt: wt}); 
    }
};

// Another way here

var networkDelayTime = function(times, n, k) {
    let graph = {};
    let costs = {};
    let parents = {};
    let processed = {};
    let processedCounter = 0;
    
    for (let time of times) {
        if (!graph[time[0]]) {
            graph[time[0]] = {};
        } 
        graph[time[0]][time[1]] = time[2];
        
    }
    
    for (let i = 1; i <= n; i++) {
        costs[i] = Infinity;
        processed[i] = false;
    }
    costs[k] = 0;
  
    node = k;
    
    while (node !== -1) {
        let cost = costs[node];
        let neighbours = graph[node];
        for (let neighbor in neighbours) {
            let newCostOfNeighbor = cost + neighbours[neighbor];
            if (newCostOfNeighbor < costs[neighbor]) {
                costs[neighbor] = newCostOfNeighbor;
                parents[neighbor] = node;
            }
        }
        processed[node] = true;
        processedCounter++;
        node = findLowestCostNode(costs)
    } 
    
    function findLowestCostNode(costs) {
        lowestCost = Infinity;
        lowestCostNode = -1;
        for (let node in costs) {
            cost = costs[node];
            if (cost < lowestCost && !processed[node]) {
                lowestCost = cost;
                lowestCostNode = node;
            }
        }
        return lowestCostNode;
    }
    
    if (processedCounter !== n) return -1;

    let set = new Set();
    for (let node in costs) {
	    set.add(costs[node]);
    }
    let max = Math.max(...set);
    
    return max;
};


// Another way here
var networkDelayTime = function(times, N, K) {
    let graph = new Graph(N);
    let distance = {};
    let pq = new PriorityQueue();
    for (var i = 1; i <= N; i++) {
        graph.addVertex(i);
        distance[i] = Infinity;
    }
    times.forEach(function(time){
        graph.addEdge(time[0], time[1], time[2]);
    });
    distance[K] = 0;
    pq.enqueue(K, 0);
    while (!pq.isEmpty()) {
        let minNode = pq.dequeue();
        let currNode = minNode.element;
        let weight = minNode.priority;
        let adjVertexes = graph.AdjList.get(currNode);
        adjVertexes.forEach(function(neigh){
            let temp = distance[currNode] + neigh.wt;
            if (temp < distance[neigh.node]) {
                distance[neigh.node] = temp;
                pq.enqueue(neigh.node, distance[neigh.node]);
            }
        })    
    }
    let time = 0;
    Object.keys(distance).forEach(function(node) {
       if (distance[node] > time) {
           time = distance[node];
       } 
    });
    return time == Infinity ? -1 : time;
};

console.log(network(  times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2))