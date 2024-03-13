const unreachablePairs=()=>{
    let parent = new Array(n);
    let size = new Array(n);
    for (let i = 0; i < n; ++i) {
        parent[i] = i;
        size[i] = 1;
    }
    
var find = function(node, parent) {
    while (node !== parent[node]) {
        node = parent[node];
    }
    return node;
};

var union = function(u, v, parent, size) {
    let rootU = find(u, parent);
    let rootV = find(v, parent);
    if (rootU !== rootV) {
        if (size[rootU] < size[rootV]) {
            [rootU, rootV] = [rootV, rootU];
        }
        parent[rootV] = rootU;
        size[rootU] += size[rootV];
    }
};

    let numVisitedNodes = 0;
    let numUnreachablePairsOfNodes = 0;



    for (let i = 0; i < edges.length; ++i) {
        let u = edges[i][0];
        let v = edges[i][1];
        union(u, v, parent, size);
    }

    for (let node = 0; node < n; ++node) {
        if (parent[node] === node) {
            let numNodesInCurrentGroup = size[node];
            numUnreachablePairsOfNodes += (numNodesInCurrentGroup * numVisitedNodes);
            numVisitedNodes += numNodesInCurrentGroup;
        }
    }
    return numUnreachablePairsOfNodes;

}

// BFS Approach
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    let disNode = Math.floor((n*(n-1))/2);
    let vis = new Set();
    let adl = new Map();
    
    for(let [src,tar] of edges) {
        if(!adl.has(src))
            adl.set(src, []);
        if(!adl.has(tar))
            adl.set(tar, []);
        adl.get(src).push(tar);
        adl.get(tar).push(src);
    }

    for(let [key] of adl) {
        if(!vis.has(key)) {
            vis.add(key);
            let k = 1;
            let q = [key];
            while(q.length) {
                let c_node = q.shift();
                for(let nei of adl.get(c_node) || []) {
                    if(!vis.has(nei)) {
                        vis.add(nei);
                        k++;
                        q.push(nei);
                    }
                }
            }
            disNode -= Math.floor((k*(k-1))/2)
        }
    }
    return disNode;
};
console.log(countPairs())


console.log(unreachablePairs())