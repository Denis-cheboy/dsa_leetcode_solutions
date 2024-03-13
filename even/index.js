const findSebsequences=(arr,index,path,length=0)=>{
    if(index==arr.length){
        if(path.length>0){
            const subsequence=path
            for(let i=0;i<subsequence.length;i++){
               if(subsequence[i+1] && subsequence[i-1]){
                    const newSubsequence=subsequence.sort((a,b)=>a-b)
                    let sum=Math.abs(Math.abs(newSubsequence[i-1]-newSubsequence[i])- Math.abs(newSubsequence[i]-newSubsequence[i+1]))
                    if(sum%2===0 && newSubsequence.length>length){
                        length=newSubsequence.length
                    }

                }
                else if(subsequence[i+1]){
                    const newSubsequence=subsequence.sort((a,b)=>a-b)
                    let sum=Math.abs(subsequence[i]-subsequence[i+1])
                    if(sum%2===0 && newSubsequence.length>length){
                        length=newSubsequence.length
                    }
                }
                else if(subsequence[i-1]){
                    const newSubsequence=subsequence.sort((a,b)=>a-b)
                    let sum=Math.abs(subsequence[i]-subsequence[i-1])
                    if(sum%2===0 && newSubsequence.length>length){
                        length=newSubsequence.length
                    }
                }
                else{
                    length=subsequence.length
                }
            }
        }
    }
    else{

        findSebsequences(arr,index+1,path,length)
        path.push(arr[index])
        findSebsequences(arr,index+1,path,length)
        path.pop()

    }
    return length
}




const res=findSebsequences(arr,0,path)
console.log(res)
