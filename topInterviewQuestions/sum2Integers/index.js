const sum=(a,b)=>{
    b=String(b).split("").reverse()
    a=String(a).split("").reverse()

    let dp=Array(b.length+a.length).fill(0)

    if(a.length===1 && b.length===1){
        return Number(a)+Number(b)
    }

    let i=0

    while(i<a.length && i<b.length){
        let digit=Number(a[i])+Number(b[i])

        dp[i]+=digit

        dp[i+1]+=Math.floor(dp[i]/10)

        dp[i]=dp[i]%10
      
        i++
    }

    dp=dp.reverse()

    let j=0

    while(j<dp.length && dp[j]===0){
        j++
    }
    return Number(dp.slice(j).join(""))

}
   
    


console.log(sum(a = 8, b =16))