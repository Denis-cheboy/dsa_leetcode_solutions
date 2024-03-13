const partition=(s)=>{
    const isPalindrome=(str)=>(str===str.split("").reverse().join(""))

    if(s.length===1) return 0

    let res=[]

    let partition=[]
    
    let min=Infinity

    function dfs(s,partition){
        if(s.length===0){
            if(([...partition].length-1)<min){
                min=[...partition].length-1
            } 
        }

        for(let i=1;i<=s.length;i++){

            let prefix=s.substring(0,i)
            let postFix=s.substring(i)

            if(isPalindrome(prefix)){
                partition.push(prefix)

                dfs(postFix,partition)

                partition.pop()
            }
        }

    }
    dfs(s,res,partition)

    return min
}

console.log(partition("aab"))