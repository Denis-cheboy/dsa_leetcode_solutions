// Indegrees=>
const maximumNetworkRank=(roads)=>{
    let inDegrees=new Array(n).fill(0)

    let graph={}

    for(let i=0;i<n;i++){
        graph[i]=[]
    }

    for(let [u,v] of roads){
        graph[u].push(v)
        graph[v].push(u)
        inDegrees[u]++
        inDegrees[v]++
    }

    let max=-Infinity

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i===j) continue

            let currIndegrees=inDegrees[i]+inDegrees[j]

            if(graph[i].includes(j)){
                currIndegrees--
            }

            max=Math.max(max,currIndegrees)

        }
    }

    return max
}