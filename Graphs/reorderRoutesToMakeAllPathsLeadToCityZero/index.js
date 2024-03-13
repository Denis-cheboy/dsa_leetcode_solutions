const reorderRoutes=()=>{
let graph={}
let fakeGraph={}

for(let i=0;i<n;i++){
    graph[i]=[]
    fakeGraph[i]=[]
}

for(let [u,v] of connections){
    graph[u].push(v)
    fakeGraph[v].push(u)
}
let count=0
let visited=new Set()

let queue=[0]

while(queue.length){
    const curr=queue.shift()

    if(curr in graph){

        for(const x of graph[curr]){
            if(visited.has(x)) continue
            queue.push(x)
            count++
        }
    }

    if(curr in fakeGraph){

        for(const x of fakeGraph[curr]){
            if(visited.has(x)) continue
            queue.push(x)
        }
    }

    visited.add(curr)

}

return count
}

// Another way

var minReorder = function(n, connections) {
    const graph = [];
    const set = new Set();
    
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    
    for (const [u, v] of connections) {
        graph[u].push(v);
        graph[v].push(u);
        set.add(`${u}#${v}`);
    }
    
    let count = 0;
    
    dfs(0, -1)
    
    return count;
    
    
    function dfs(node, parent) {
        
        if (set.has(`${parent}#${node}`)) count++;
        
        for (const nei of graph[node]) {
            if (nei === parent) continue;
       
            dfs(nei, node);
        }
    }
}; 

console.log(reorderRoutes())