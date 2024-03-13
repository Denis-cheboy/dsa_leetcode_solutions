// DFS
const criticalConnection=()=>{
    let visited=new Set()
    let answer=[]
    let graph={}
    let time=0
    let minTime=[]
    let originalTime=[]
 
    for(let [u,v] of connections){
        if(!(u in graph)) graph[u]=[]
        if(!(v in graph)) graph[v]=[]
 
        graph[u].push(v)
        graph[v].push(u)
    }
 
    dfs(0,null)
 
    return answer
 
    function dfs(node,parent){
        time++
        visited.add(node)
 
        minTime[node]=originalTime[node]=time
 
        if(graph[node]){
            for(let neighb of graph[node]){
                if(!(visited.has(neighb))){
                    dfs(neighb,node)
                    if(originalTime[node]<minTime[neighb]){
                        answer.push([node,neighb])
                    }
                    else{
                        minTime[node]=Math.min(minTime[node],minTime[neighb])
                    }
                }
                else if(neighb!==parent){
                    minTime[node]=Math.min(minTime[node],minTime[neighb])
                }
            }
        }
 
    }
 
}

// Tarjans Algorithm
const criticalConnection2=()=>{
    let graph=[...Array(n)].map(()=>[])
    let visited=new Array(n).fill(false)
    let pending=new Array(n).fill(false)
    let discover=[]
    let lowLink=[]
    let critical=[]
    let time=0

    for(let [u,v] of connections){
        graph[u].push(v)
        graph[v].push(u)
    }

    function dfs(node,parent){
        if(pending[node]) return lowLink[node]
        pending[node]=true
        discover[node]=time
        lowLink[node]=time
        time++

        for(let neighb of graph[node]){
            if(neighb===parent || visited[neighb]) continue
            let childLink=dfs(neighb,node)
            lowLink[node]=Math.min(childLink,lowLink[node])
            if(childLink>discover[node]) critical.push([node,neighb])
        }

        pending[node]=false
        visited[node]=true

        return lowLink[node]
    }

    dfs(0,null)
    
    return critical

}