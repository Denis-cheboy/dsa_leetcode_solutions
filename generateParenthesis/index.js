const generateParanthesis=(n)=>{
    
    let answer=[]
    
    const helper=(ans,n,open,close,currentString)=>{
        // base case
        if(currentString.length===n*2){
            ans.push(currentString)
            return
        }

        if(open<n){
            helper(ans,n,open+1,close,currentString+"(")
        }
        
        if(close<open){
            helper(ans,n,open,close+1,currentString+")")
        }
    }

    helper(answer,n,0,0,"")

    return answer

}


const answer=generateParanthesis(2)

console.log(answer)
