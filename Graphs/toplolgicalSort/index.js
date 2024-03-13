// It is a linear ordinary of vertices such that for any directed edge uv, u must come first in the ordering before V
// It only works for Directed Acyclic Graph
// It can be perfomed both BFS and DFS approach


// DFS Approach
function topologicalSort(edges){

    let graph={}

    for(let edge of edges){
        let [u,v]=edge
        if(!(u in graph)) graph[u]=[v]
        else graph[u].push(v)
    }

    let visited=new Set()
    let stack=[]

    for(let key in graph){
        if(!(visited.has(key))){
            dfs(key)
        }
    }

    function dfs(vertex){

        visited.add(vertex)

        let neighbours=graph[vertex] || []

        for(let neighbour of neighbours){
            if(!visited.has(neighbour)){
                dfs(neighbour)
            }
        }

        stack.unshift(vertex)
    }
}

// BFS Approach
function topologicalSort2(edges){
    let graph={}
    let vertices=new Set()

    for(let edge of edges){
       
        let [u,v]=edge

        if(!(vertices.has(u))) vertices.add(u)
        if(!(vertices.has(v))) vertices.add(v)

        if(!(u in graph)) graph[u]=[v]
        else graph[u].push(v)
    }

    let newVertices=new Array(...vertices)

    const inDegree=new Map()
    const queue=[]

    for(let node of newVertices){
        inDegree.set(node,0)
    }

    // Calculating inDegrees of every incoming nodes

    for(const node of newVertices){

        let neighbours=graph[node] || []

        for(let neighbour of neighbours){
            inDegree.set(neighbour,inDegree.get(neighbour)+1)
        }
    }

    // Enqueueu nodes with zero inDegrees

    for(let [node,degree] of inDegree.entries() ){
        if(degree===0){
            queue.push(node)
        }
    }

    let res=[]

    while(queue.length>0){
        let node=queue.shift()
        res.push(node)
        const neighbors = graph[node] || [];
        for(let neighbour of neighbors){
            inDegree.set(neighbour,inDegree.get(neighbour)-1)

            if(inDegree.get(neighbour)===0){
                queue.push(neighbour)
            }
        }
    }

    if (res.length !== newVertices.length) {
        throw new Error("The graph contains a cycle.");
      }
    
    return res
}
let getAdjacencyMatrix=[
    ["A","D"],["A","B"],["D","B"],["C","D"],["C","B"]
]

console.log(topologicalSort2(getAdjacencyMatrix))