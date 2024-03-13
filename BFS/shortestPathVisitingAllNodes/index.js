var shortestPathLength = function(graph) {
    
    let n=graph.length
    let fullBitMask=(1<<n)-1

    let queue=[]
    let visited=new Set()

    for(let i=0;i<n;i++){
        queue.push([i,1<<i])
        visited.add(`${i},${1<<i}`)
    }

    let steps=0

    while(queue.length){
        let next=[]

        while(queue.length){
            let [node,bitmask]=queue.pop()

            if(bitmask===fullBitMask) return steps

            for(let neighbour of graph[node]){
                let newBitmask=bitmask | (1<<neighbour)

                if(!visited.has(`${neighbour},${newBitmask}`)){
                    next.push([neighbour,newBitmask])
                    visited.add(`${neighbour},${newBitmask}`)
                }
            }
        }
        queue=next
        steps++
    }
};
console.log(shortestPath())