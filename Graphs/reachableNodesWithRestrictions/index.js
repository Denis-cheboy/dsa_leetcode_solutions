const restrictions=()=>{
 
    let graph={}

    for(let i=0;i<n;i++){
        graph[i]=[]
    }
    for(let [u,v] of edges){
        graph[u].push(v)
        graph[v].push(u)
    }

    let queue=[0]

    let visited=new Set()
    
    let count=0

    while(queue.length>0){

        let curr=queue.shift()

        visited.add(curr)

        count++

        let neighbours=graph[curr] || []

        for(let neighb of neighbours){
            if(visited.has((neighb))) continue
            if(restricted.includes(neighb)) continue

            queue.push(neighb)
        }
    }

    return count
}

// DFS

const minimumCost2=(n,edges,restrictions)=>{
    let graph={}

    for(let i=0;i<n;i++){
        graph[i]=[]
    }
    for(let [u,v] of edges){
        graph[u].push(v)
        graph[v].push(u)
    }

    let visited=new Set()
    let count=0

    function dfs(start){
        visited.add(start)
        count++

        let neighbours=graph[start] || []

        for(let neighb of neighbours){
            if(!(visited.has(neighb)) && !restrictions.includes(neighb)){
                dfs(neighb)
            }
        }
    }

    dfs(0)

    return count
}



console.log(minimumCost2(n = 7, edges = [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], restricted = [4,5]))