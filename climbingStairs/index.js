const climbingStairs=(n,memo={})=>{
    if(n in memo) return memo[n]

    if(n==0) return 1
    if(n<0) return 0

    memo[n]=climbingStairs(n-2,memo)+climbingStairs(n-1,memo)

    return memo[n]

}

console.log(climbingStairs(2))