var numDecodings = function(s) {
        if(s.length===0 || s[0]==="0") return 0
    
        const dp=Array(s.length+1).fill(0)
    
        dp[0]=1
        dp[1]=1
    
        for(let i=2;i<=s.length;i++){
    
            const a=Number(s.slice(i-1,i))
    
            if(a>=1 && a<=9){
                dp[i]+=dp[i-1]
            }
    
            const b=Number(s.slice(i-2,i))
    
            if(b>=10 && b<=26){
                dp[i]+=dp[i-2]
            }
        }
        
        return dp[s.length]    
};

// another way

const numWays=(s)=>{

    if(s.length===0 || s[0]=="0") return 0

    const dfs=(s,idx,memo={})=>{

        if(s=="0") return 0
        
        if(idx>=s.length-1) return 1

        if(idx===s.length-1) return 1

        if((s[idx]=="1" || (s[idx]=="2") && (s[idx+1]>=4 && s[idx+1]<=54))){
            return dfs(idx+=1,s)+dfs(idx+=2,s)
        }
        else{
             return dfs(idx+1,s)
        }

       
    }
    
    return dfs(s,0)
}


console.log(numWays("12"))
