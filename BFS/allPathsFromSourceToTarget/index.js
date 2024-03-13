const allPaths=(graph)=>{
    let target=graph.length-1

    let res=[]

    const dfs=(node,path)=>{
        path.push(node)

        if(node===target){
            res.push(path)
            return 
        }

        for(let edge of graph[node]){
            dfs(edge,[...path])
        }
    }

    dfs(0,[])

    return res
}

// BFS

const allPaths2=(graph)=>{
    let target=graph.length-1

    let stack=[[0,[0]]]
    let res=[]

    while(stack.length>0){

        let [node,route]=stack.shift()

        if(node===target){
            res.push(route)
        }
        else{
            for(let neighhbour of graph[node]){
                stack.push([neighhbour,[...route,neighhbour]])
            }
        }
    }

    return res
}

console.log(allPaths2([[1,2],[3],[3],[]]))