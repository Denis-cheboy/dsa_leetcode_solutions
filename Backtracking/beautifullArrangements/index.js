var countArrangement = function(n) {
    
    if(n<3) return n

    let count=0

    const visited=new Array(n+1).fill(false)


    function dfs(i){

        if(i>n){
            count++
            return
        }

        for(let idx=1;idx<=n;idx++){

            if(!visited[idx] && (idx%i===0 || i%idx===0)){
                visited[idx]=true
                dfs(i+1)
                visited[idx]=false
            }
        }

        return
    }

    dfs(1)
    return count
};