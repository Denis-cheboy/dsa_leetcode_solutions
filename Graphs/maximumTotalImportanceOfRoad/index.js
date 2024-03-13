const maxImportance=()=>{
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

    inDegrees.sort((a,b)=>a-b)


    let totalSum=0

    for(let i=n-1;i>=0;i--){
        totalSum+=(inDegrees[i]*(i+1))
    }

   
   return totalSum
}

console.log(maxImportance())