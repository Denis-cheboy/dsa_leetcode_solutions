const craftingTheSafe=()=>{
    if(n===1 && k===1) return "0"

    const visited=new Set()

    const seq=[]

    const prefix="0".repeat(n-1)

    dfs(prefix,seq,visited,k)

    seq.push(prefix)

    return seq.join("")

    function dfs(prefix,seq,visited,k){

        for(let i=0;i<k;i++){

            const combination=prefix+i.toString()

            if(visited.has(combination)) continue

            visited.add(combination)

            dfs(combination.slice(1),seq,visited,k)

            seq.push(i)

        }
    }


}

console.log(craftingTheSafe( n = 1, k = 2))