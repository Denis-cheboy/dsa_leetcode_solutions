const eventualSafe=(graph)=>{
    let res=[]
    let visited={}

    for(let i=0;i<graph.length;i++){
        if(isNodeSafe(graph,i,visited)){
            res.push(i)
        }
    }

    return res.sort((a,b)=>a-b)

    function isNodeSafe(graph,node,visited){
        if(visited[node]===true){
            return false
        }
        if(visited[node]==="safe") return true

        visited[node]=true

        for(let i=0;i<graph[node].length;i++){
            if(!isNodeSafe(graph,graph[node][i],visited)){
                return false
            }
        }
        
        visited[node]="safe"

        return true
    }

}



console.log(eventualSafe(graph = [[1,2],[2,3],[5],[0],[5],[],[]]))