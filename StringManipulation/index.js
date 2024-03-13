// generating possible subsequences from a string
// a subsequence must be in order

const generateSequence=(arr)=>{
     let len=arr.length
     let res=[]

     const generate=(arr,index,comb,res)=>{

        if(index>=len){
            res.push([...comb])
            return 
        }

        comb.push(arr[index])

        generate(arr,index+1,comb,res)

        comb.pop()

        generate(arr,index+1,comb,res)
     }
     generate(arr,0,[],res)
     return res
}

// for strings here

const generateSubstrings=(s)=>{
    let len=s.length
    let res=[]

    const generate=(s,index,comb)=>{

        if(index>=len){
            res.push([...comb])
            return 
        }

        comb.push(s[index])
        generate(s,index+1,comb)
        comb.pop()
        generate(s,index+1,comb)

    }
    generate(s,0,[])
    return res
}

console.log(generateString("mike"))