const minimum=(n,edges)=>{
   
    if(n===1) return [0]

    const inDegrees=new Array(n).fill(0)
    const graph=new Map()
  
    for(let i=0;i<n;i++){
        graph.set(i,[])
    }
  
    for(const [e1,e2] of edges){
        graph.get(e1).push(e2)
        graph.get(e2).push(e1)
  
        inDegrees[e1]++
        inDegrees[e2]++
    }

  
    const queue=[]
  
    for(let i=0;i<n;i++){
        if(inDegrees[i]===1){
            queue.push(i)
        }
    }
  
    while(n>2){
        let size=queue.length
  
        n-=size

        while(size>0){
            const node=queue.shift()
            size-=1
  
            for(const neighbor of graph.get(node)){
                inDegrees[neighbor]--
  
                if(inDegrees[neighbor]===1){
                    queue.push(neighbor)
                }
            }
        }
    }
  
    return queue
}

console.log(minimum( n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]))