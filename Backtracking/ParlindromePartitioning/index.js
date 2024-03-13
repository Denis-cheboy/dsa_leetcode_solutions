const palindromicPartition=(str)=>{

    let isPlaindrome=(str)=>str===str.split("").reverse().join("")

    let res=[]

    function backtrack(str,partition){

        if(str.length===0){
            res.push([...partition])
            return
        }

        for(let i=1;i<str.length;i++){

            let prefix=str.substring(0,i)
            let proFix=str.substring(i)

            if(isPlaindrome(prefix)){
                partition.push(prefix)
                backtrack(proFix,partition)
                partition.pop()
            }

        }
    }

    backtrack(str,partition)

    return res
}

// Another way
const palindromicPartition2=(str)=>{

    let isPalindrome=(str)=>str===str.split("").reverse().join("")

    function backtrack(start,partition){

        if(start>=n){
            res.push([...partition])
            return 
        }

        for(let end=start+1;end<n;end++){
            let prefix=str.substring(start,end)

            if(isPalindrome(prefix)){
                partition.push(prefix)
                backtrack(end,partition)
                partition.pop()
            }
        }
    }

    backtrack(0,[])
}

