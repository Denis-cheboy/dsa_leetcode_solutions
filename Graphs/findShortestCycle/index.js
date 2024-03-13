const shortestCycle=(n,edges)=>{
    const initializeGraph=(n)=>{
        let graph=[]

        for(let i=0;i<n;i++){
            graph[i]=[]
        }

        return graph
    }

    const packUG=(g,edges)=>{
        for(let [u,v] of edges){
            g[u].push(v)
            g[v].push(u)
        }
    }

    let res=Number.MAX_SAFE_INTEGER

    let g=initializeGraph(n)
    packUG(g,edges)

    for(let i=0;i<n;i++){
        res=Math.min(res,shortestCycleUG(g,i))
    }

    return res==Number.MAX_SAFE_INTEGER?-1:res

    function shortestCycleUG(g,start){
        let n=g.length
        let dis=Array(n).fill(Number.MAX_SAFE_INTEGER)
        let q=[[start,-1]]

        dis[start]=0

        let res=Number.MAX_SAFE_INTEGER

        while(q.length){
            let [curr,par]=q.shift()
            for(const child of g[curr]){
                if(dis[child]>dis[curr]+1){
                    dis[child]=dis[curr]+1
                    q.push([child,curr])
                }
                else if(child!=par){
                    let cycle=dis[curr]+dis[child]+1
                    res=Math.min(res,cycle)
                }
            }
        }

        return res
    }

}

// DFS Approach
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findShortestCycle = function(n, edges) {
    let adacencyList = new Map()
    edges.forEach(edge => {
        if (adacencyList.has(edge[0])) {
            let neighbours = adacencyList.get(edge[0])
            neighbours.push(edge[1])
            adacencyList.set(edge[0], neighbours)
        } else {
            adacencyList.set(edge[0], [edge[1]])
        }
        if (adacencyList.has(edge[1])) {
            let neighbours = adacencyList.get(edge[1])
            neighbours.push(edge[0])
            adacencyList.set(edge[1], neighbours)
        } else {
            adacencyList.set(edge[1], [edge[0]])
        }
    })
    let answer = Infinity
    let visits = new Set()
    const dfs = (node, prevNode, visited, j, depth) => {
        if (depth > answer) return
        visits.add(node)
        let neighbours = adacencyList.get(node)
        let found = false
        neighbours.forEach(neighbour => {
            if (neighbour === prevNode) return
            if (visited.has(neighbour) ) {
                let length = visited.size - new Array(...visited).indexOf(neighbour)
                answer = Math.min(answer, length)
                found  = true
            }
        })
        if (found) return
        neighbours.forEach(neighbour => {
            if (neighbour === prevNode) return
            let alreadyVisited = new Set(visited)
            alreadyVisited.add(neighbour)
            dfs(neighbour, node, alreadyVisited, j, depth+1)
        })
        
    }
    
    for (let i = 0; i < n; i++) {
        if (adacencyList.has(i)) { 
            if (!visits.has(i)) dfs(i, -1, new Set(), i, 0)
        }
    }
    if (answer === Infinity) return -1
    return answer
};

console.log(shortestCycle( n = 7, edges = [[1,2],[0,1],[3,2],[1,3]]))