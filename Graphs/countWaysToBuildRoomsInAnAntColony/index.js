const countColony=(prevRoom)=>{
      
    let directedGraph={}

    let inDegrees=new Array(prevRoom.length).fill(0)

    for(let i=0;i<prevRoom.length;i++){
        if(prevRoom[i]===-1) continue
        if(!(prevRoom[i] in directedGraph)) directedGraph[prevRoom[i]]=[i]
        else directedGraph[prevRoom[i]].push(i)
    }

    for(let key in directedGraph){

        let neighbours=directedGraph[key]

        for(let neighb of neighbours){
            inDegrees[neighb]++
        }
    }

    let queue=[]

    for(let i=0;i<prevRoom.length;i++){
        if(inDegrees[i]===0){
            queue.push(i)
        }
    }


    let path=[]
    let count=0


    let visited=new Array(prevRoom.length).fill(false)


    const topOdering=(n,path,visited)=>{

        for(let i=0;i<n;i++){

            if(inDegrees[i]===0 && visited[i]===false){

                let neighbours=directedGraph[i] || []

                if(neighbours.length>0){
                    for(let neighb of neighbours ){
                        console.log(neighb)
                        inDegrees[neighb]--
                    }
                }
            }

            path.push(i)
            visited[i]=true


            topOdering(n,path,visited)

            for(let neighb of directedGraph[i] || []){
                inDegrees[neighb]++
            }

            path.pop()
            visited[i]=false
        }

        if(path.length===n){
            count++
        }
    }

    let n=prevRoom.length


    topOdering(n,path,visited)
    console.log(count)
}

console.log(countColony(prevRoom = [-1,0,0,1,2]))