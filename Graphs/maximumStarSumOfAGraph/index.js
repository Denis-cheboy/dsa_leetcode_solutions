const maxStarSum=(vals,edges,k)=>{
    let graph={}

    for(let [u,v] of edges){
        if(!(u in graph)) graph[u]=[]
        if(!(v in graph)) graph[v]=[]

        graph[u].push(v)
        graph[v].push(u)

    }

    const  getMax=(i)=>{

        let neighbours=graph[i] || []


        const values=neighbours.map(x=>vals[x]).sort((a,b)=>b-a)

        let sum=vals[i]

        let count=0

        for(const v of values){
            if(v>0 && count<k){
                sum+=v
                count++
            }
            else{
                break
            }
        }

        return sum
    }

    let max=-Infinity

    for(let i=0;i<vals.length;i++){
        max=Math.max(max,getMax(i))
    }

    return max
}

var maxStarSum2 = function(vals, edges, k) {    
    const graph = buildGraph(edges, vals)

    let res = []
    for (let i = 0; i < vals.length; i++) {
        const localRes = []
        for (const graphVal of graph[i] || []) localRes.push(vals[graphVal])
        localRes.sort((a, b) => b - a)
        
        res.push(vals[i] + localRes.slice(0, k).reduce((a, b) => a + b, 0))
    }
    
    return Math.max(...res)
};

function buildGraph(edges, vals) {
    const graph = {}
    
    for (const edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        if (vals[b] > 0) graph[a].push(b)
        if (vals[a] > 0) graph[b].push(a)
    }
    
    return graph
}

console.log(maxStarSum(vals = [1,2,3,4,10,-10,-20], edges = [[0,1],[1,2],[1,3],[3,4],[3,5],[3,6]], k = 2))