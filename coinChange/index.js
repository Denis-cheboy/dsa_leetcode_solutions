// dp solution
const coinChange=(coins,amount)=>{

    const dp=Array(amount+1).fill(Infinity)

    dp[0]=0

    for(let coin of coins){

        for(let i=coin;i<=amount;i++){
            dp[i]=Math.min(dp[i],dp[i-coin]+1)

        }
    }

    return dp[amount]===Infinity?-1:dp[amount]
}

// recursion 
const coinChange2=(coins,amount)=>{

    let memo={}

    function combination(amount){
        if(amount in memo) return memo[amount]
        if(amount===0) return 0

        let min=Infinity

        for(let coin of coins){
            const remainder=amount-coin

            if(remainder>=0){
                min=Math.min(min,combination(remainder))
            }
        }
        memo[amount]=min+1
        return min+1
    }

    const res=combination(amount)
    return res===Infinity?-1:res
}

// another way again, my best way here manzee

const coinChange3=(coins,amount)=>{
    if(amount===0) return 0
    
    let min=Infinity

    for(let coin of coins){
        const remainder=amount-coin

        if(remainder>=0){
            let size=coinChange3(coins,remainder)+1

            if(size<min){
                min=size
            }
        }
    }
    return min
}

console.log(coinChange3([1,2,5],11))