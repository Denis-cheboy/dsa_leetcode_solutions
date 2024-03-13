const numberOfProvinces=()=>{
    let visited=new Set()

    let circles=0

    for(let i=0;i<isConnected.length;i++){

        if(!visited.has(i)){
            // start dfs
            dfs(i)

            circles++
        }
    }

    function dfs(i){

        for(let j=0;j<isConnected.length;j++){

            if(isConnected[i][j]===1 && !visited.has(j) ){
                visited.add(j)

                dfs(j)
            }
        }
    }

    return circles

}

// another way here=> BFS
const numberOfProvinces2=(isConnected)=>{
    let seen=new Set()
    let stack=[]
    let res=0

    for(let i=0;i<isConnected.length;i++){
        if(!seen.has(i)){
            stack.push(i)

            while(stack.length){
                let curr=stack.pop()

                for(let j=0;j<isConnected.length;j++){
                    if(!seen.has(j) && isConnected[curr][j]===1){
                        stack.push(j)
                    }
                }
            }
            
            res++
        }
    }

    return res
    
}


console.log(numberOfProvinces())