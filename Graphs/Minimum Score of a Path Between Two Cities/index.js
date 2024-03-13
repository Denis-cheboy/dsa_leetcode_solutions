const minimum=()=>{
    const graph = new Array(n + 1).fill().map(() => []);
    const visited = new Set([]);
  
    for (const [v1, v2, distance] of roads) {
      graph[v1].push([v2, distance]);
      graph[v2].push([v1, distance]);
    }
  
    const queue = [1];
    visited.add(1);
    let ans = Infinity;
  
    while (queue.length > 0) {
      const node = queue.shift();
      for (const [next, distance] of graph[node]) {
        ans = Math.min(ans, distance);
        if (visited.has(next)) continue;
  
        visited.add(next);
        queue.push(next);
      }
    }
  
    return ans;
}

// DFS
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const adj = new Map();
    
    for (const [u, v, d] of roads) {
        if (adj.has(u)) {
            const arr = adj.get(u);
            arr.push([v, d]);
            adj.set(u, arr);
        } else {
            adj.set(u, [[v, d]]);
        }
        
        if (adj.has(v)) {
            const arr = adj.get(v);
            arr.push([u, d]);
            adj.set(v, arr);
        } else {
            adj.set(v, [[u, d]]);
        }
    }
    
    let ans = Infinity;
    const visited = new Set();
    
    function dfs(node) {
        visited.add(node);
        
        for (const [nei, dis] of adj.get(node)) {
            ans = Math.min(ans, dis);
            
            if (visited.has(nei)) {
                continue;
            }
            
            dfs(nei);
        }
    }
    
    dfs(1);
    
    return ans;
};

// Union Find
class DisjointSetUnion {
    constructor(n) {
        this.parent = new Array(n + 1).fill().map((_, index) => index);
        this.rank = new Array(n + 1).fill(0);
    }

    find(num) {
        if(this.parent[num] === num) return num;

        return this.parent[num] = this.find(this.parent[num]);
    }

    union(source, target) {
        source = this.find(source);
        target = this.find(target);

        if(this.rank[source] < this.rank[target]) {
            [source, target] = [target, source];
        }

        this.parent[target] = source;
        this.rank[source] += 1;
    }
}

var minScore = function(n, roads) {
    const dsu = new DisjointSetUnion(n);
    for(const [source, target] of roads) {
        dsu.union(source, target);
    }

    let minDistance = Infinity;
    const root = dsu.find(1);
    for(const [source, target, distance] of roads) {
        if(dsu.find(source) === root || dsu.find(target) === root) {
            minDistance = Math.min(minDistance, distance);
        }
    }

    return minDistance;
};


console.log(minimum())