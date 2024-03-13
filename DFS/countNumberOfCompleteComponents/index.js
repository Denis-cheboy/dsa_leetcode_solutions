var countCompleteComponents = function(n,edges) {
    // build the graph
    
    let graph={}
    let count=0
    let visited=new Set()

    for(let edge of edges){
        const [a,b]=edge

        if(!(a in graph)) graph[a]=[]
        if(!(b in graph)) graph[b]=[]

        graph[a].push(b)
        graph[b].push(a)
    }

    for(let node=0;node<n;node++){
       if(visited.has(node)) continue

       let nodeCount=0
       let edgeCount=0

       let queue=[node]

       while(queue.length){
          let current=queue.shift()

          if(visited.has(current)) continue

          visited.add(current)

          nodeCount++

          for(let neighbour of graph[current]){
            if(visited.has(neighbour)) continue
            queue.push(neighbour)
            edgeCount++
          }
       }

       let correctEdgeCount=nodeCount*(nodeCount-1)/2

       if(correctEdgeCount===edgeCount) count++
    }

    return count
    
   
};

var countCompleteComponents2 = function(n, edges) {
    const list = new Array(n).fill().map(() => []);
    for (const [a, b] of edges) {
        list[a].push(b);
        list[b].push(a);
    }
    console.log(list)
  
    const visitedNodes = new Set;
    let componentCounts = 0;
  
    for (let node = 0; node < n; node++) {
      if (visitedNodes.has(node)) continue;
  
      const queue = [node];
      let edgeCounts = 0;
      let nodeCounts = 0;
  
      while (queue.length) {
        const node = queue.shift();
        if (visitedNodes.has(node)) continue;
        visitedNodes.add(node);
        nodeCounts++;
  
        for (const adjacentNode of list[node]) {
          if (visitedNodes.has(adjacentNode)) continue;
  
          queue.push(adjacentNode);
          edgeCounts++;
        }
      }
  
      const correctEdgeCounts = nodeCounts * (nodeCounts - 1) / 2;
      if (edgeCounts === correctEdgeCounts) componentCounts++;
    }
  
    return componentCounts;
  };

  function countCompleteComponents(n, edges) {
    const map = new Array(n);

    // Organize the nodes into their corresponding sets
    for (const [from, to] of edges) {
        const v1 = map[from] ?? new Set();
        const v2 = map[to] ?? new Set();

        v1.add(to);
        v1.add(from);

        for (const val of v2) {
            v1.add(val);
            map[val] = v1;
        }

        map[from] = v1;
        map[to] = v1;
    }

    let result = 0;

    const distinct = new Map();

    // Create a map { set : number of edges building it }
    for (let i = 0; i < n; i++) {
        if (map[i] === undefined) {
            result++;
        } else {
            distinct.set(map[i], 0);
        }
    }

    // Count the edges for each set, incrementing result if the set is *complete*
    for (const [from] of edges) {
        const set = map[from];
        const current = distinct.get(set);

        const edgesNeeded = set.size * (set.size - 1) / 2;

        if (current + 1 === edgesNeeded) {
            result++;
        } else {
            distinct.set(set, current + 1);
        }
        
    }

    return result;
};

console.log(countCompleteComponents(6,[[0,1],[0,2],[1,2],[3,4],[3,5]]))