// keeping time of insertion=> definitely mean time taken to discover a node using a reqularr dfs traversal
// Lowest time of insertion mean time taken to reach a specific lower node

const bridges=(n,edges)=>{
    let graph={}

    for(let [u,v] of edges){
        if(!(u in graph)) graph[u]=[]
        if(!(v in graph)) graph[v]=[]

        graph[u].push(v)
        graph[v].push(v)
    }

    let visited=new Set()
    let timer=0
    let currentTime=[];
    let lowestTime=[];
    let count=[]

    function dfs(node,parent){

        visited.add(node)

        currentTime[node]=lowestTime[node]=timer

        timer++

        let neighbours=graph[node]

        for(let neighb of neighbours){
            if(neighb===parent) continue

            if(!(visited.has(neighb))){
                dfs(neighb,node)

                lowestTime[node]=Math.min(lowestTime[node],lowestTime[neighb])

                if(lowestTime[neighb]>currentTime[node]){
                   count.push([node,neighb])
                }
            }
            else{
                lowestTime[node]=Math.min(lowestTime[node],lowestTime[neighb])

            }
            
        }

        return lowestTime[node]
    }



    dfs(0,-1)

    return count
}

console.log(bridges(4,[[0,1],[1,2],[2,0],[1,3]]))

const res=[1,2,3,4]