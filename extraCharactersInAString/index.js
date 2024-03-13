var minExtraChar = function(s, dictionary) {

    const n=s.length
    const dp=new Array(n).fill()
    const set=new Set(dictionary)

    return helper(s,set,dp,0)

    function helper(s,set,dp,idx){
        if(idx>=s.length) return 0
        if(dp[idx]!==undefined) return dp[idx]

        let result=1+helper(s,set,dp,idx+1)

        for(let i=idx;i<s.length;i++){
            
            const substring=s.slice(idx,i+1)

            if(!set.has(substring)) continue

            const next=helper(s,set,dp,i+1)

            result=Math.min(result,next)

        }
         return (dp[idx]=result)
    }
};
console.log(minExtraChar("leetscode",["leet","code","leetcode"]))