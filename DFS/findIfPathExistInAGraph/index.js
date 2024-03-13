const findPath=()=>{
    
    let graph={}
    let visited=new Set()

    for(let edge of edges){
        const [a,b]=edge

        if(!(a in graph)){
            graph[a]=[]
        }

        if(!(b in graph)){
            graph[b]=[]
        }

        graph[a].push(b)
        graph[b].push(a)
    }

    function dfs(source){

        visited.add(source)

        const edges=graph[source]

        if(edges && edges.length>0){
            for(let e of edges){
                if(!visited.has(e)) dfs(e)
            }
        }
    }

    dfs(source)

    return visited.has(destination)
}

console.log(findPath())