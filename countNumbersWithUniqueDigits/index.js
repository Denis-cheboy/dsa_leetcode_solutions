// time limit excedded
var countNumbersWithUniqueDigits = function(n) {
    
    if(n===0) return 1

    let output=0
    let memo=new Set()

    let length=Math.pow(10,n)

    for(let i=0;i<length;i++){

        let numString=String(i)

        if(numString.length>1){
            if(checkFrequency(numString)){
                continue
            }
        }

        if(memo.has(numString)) continue

        memo.add(numString)

        output++


    }

    function checkFrequency(s){
        let memo=new Set()

        let answer=[...s]

        answer.forEach(str=>{
            memo.add(str)
        })

        return s.length!==memo.size?true:false
    }

    return output
};
// another way here with recursion
var countNumbersWithUniqueDigits2 = function(n) {
    
    if(n===0) return 1

    if(n==1) return 10

    let k=9

    for(let i=0;i<n-1;i++){
        k*=(9-i)
    }

    return k+countNumbersWithUniqueDigits2(n-1)
};

// another way here
var countNumbersWithUniqueDigits3 = function(n) {
    return [1,10,91,739,5275,32491,168571,712891,2345851][n]
};

// with dp solution
const countNumbers=(n)=>{

    const dp=[1,10]

    const sum=[1,11]

    for(let i=2;i<=n;i++){
        dp[i] = sum[i - 1] + (10 - i) * (dp[i - 1]);
        sum[i] = sum[i - 1] + dp[i];
    }

    return dp[n]
}

console.log(countNumbers(3))