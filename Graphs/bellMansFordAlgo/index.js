// BellmanFords algorithm has the ability to find the shortest distances given negative edge weights
// BellmansFord however fails to find the shortest distance incase their exists negative total edge weight cycle within the graph
// As a result It can be used to test for cycles,
// Its time complexity is O(v*e)=>O(n^2), although its time complexity for a full graph is O((n(n-1))/2*n-1)=>O(n^3)
// Its slower than Dijkstra algorithm but recommented for negative edge weights

// Relax all the edges of the graph (n-1) times where n-> is the no of vertices
// We are doing it n-1 times his is because the shortest path to any vertex can pass through at most V-1 other vertices.


function Bellmans(numOfVertices,source,edges,dest){

    let res=new Array(numOfVertices).fill(Infinity)

    res[source]=0

    for(let i=0;i<numOfVertices-1;i++){

        for(let [u,v,w] of edges){
            
            if(res[u]!==Infinity && res[u]+w<res[v] ){
                res[v]=w+res[u]
            }

        }
    }

    // Checking cycles
    for(let [u,v,w] of edges){
            
        if(res[u]!==Infinity && res[u]+w<res[v] ){
            return -1
        }
    }

    console.log(res)

    return res[dest]
}

const edges=[
    [0,1,1],[0,3,2],[0,2,6],[1,4,4],[1,2,1],[2,3,7],[2,4,1],[3,4,4]
]

console.log(Bellmans(5,0,edges,4))