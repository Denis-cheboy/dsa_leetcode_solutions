// Time Complexity 2^n*n
const generateSubsequence=(arr)=>{

    let res=[]

    function generate(index,seq){

        if(index>=arr.length){
            res.push([...seq])
            return 
        }

        generate(index+1,[...seq,arr[index]])
        generate(index+1,seq)
    }

    generate(0,[])

    console.log(res)
}

// Another way 

const generateSubsequence2=(arr)=>{

    let res=[]

    function generate(index,seq){
        if(index>=arr.length){
            res.push([...seq])
            return 
        }

        seq.push(arr[index])

        generate(index+1,seq)

        seq.pop()

        generate(index+1,seq)
    }

    generate(0,[])

    return res
}

// Function to print all seqbsequence with sum k

function generateSubsequence3(arr,k){
    let res=[]

    function generate(index,seq,sum){

        if(index>=arr.length){
           if(sum===k){
             res.push([...seq])
           }
            return
        }

        sum+=arr[index]
        seq.push(arr[index])

        generate(index+1,seq,sum)

        seq.pop()
        sum-=arr[index]

        generate(index+1,seq,sum)
    }

    generate(0,[],0)

   return res
}

// Function to print one subsequence with sum k

function generateSubsequence4(arr,k){

    function findSubSequence(index,seq,sum){

        if(index>=arr.length){
            if(sum===k){
                return true
            }
            else{
                return false
            }
        }

        sum+=arr[index]
        seq.push(arr[index])

        let ans=findSubSequence(index+1,seq,sum)
        if(ans) return seq

        sum-=arr[index]
        seq.pop()
        return findSubSequence(index+1,seq,sum)
    }

    return findSubSequence(0,[],0)
}

// Print count of subsequences

function generateSubsequence5(arr,k){

    function findSubSequence(index,seq,sum){

        if(index>=arr.length){
            if(sum===k){
                return 1
            }
            else{
                return 0
            }
        }

        sum+=arr[index]
        seq.push(arr[index])

        let l=findSubSequence(index+1,seq,sum)

        sum-=arr[index]
        seq.pop()

        let r=findSubSequence(index+1,seq,sum)

        return l+r
    }
    return findSubSequence(0,[],0)
}

// 

console.log(generateSubsequence2([1,2,3],3))