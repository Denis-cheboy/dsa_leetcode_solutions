const intergerBreak=(n)=>{
   
    let memo={}

    function dp(n){
        if(n==1 || n==2) return 1

        if(n in memo) return memo[n]

        let q=0

        for(let i=1;i<=n/2;i++){

            q=Math.max(q,i*Math.max((n-i),dp(n-i)))
            
        }
        memo[n]=q

        return q
    }
    return dp(n)
}
console.log(intergerBreak(10))