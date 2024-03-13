const uniquePath=(m,n,memo={})=>{
    let key=m+","+n
    if(key in memo) return memo[key]
    if(m===1 && n===1){
        return 1
    } 

    if(m===0 || n===0){
        return 0
    } 

    memo[key]=uniquePath(m-1,n,memo)+uniquePath(m,n-1,memo)

    return memo[key]
}

// another way 
const uniquePath2=(m,n)=>{

    let pathCount=factorial(m-1+n-1)/(factorial(m-1)*factorial(n-1))

    return pathCount


    function factorial(n){

        if(n==0 || n===1){
            return 1
        }
        else{
            return n*factorial(n-1)
        }
    }
}

// another way again tabulation

const uniquePath3=(m,n)=>{
    let table=Array(m+1).fill().map(()=>Array(n+1).fill(0))

    table[1][1]=1

    for(let r=0;r<=m;r++){

        for(let c=0;c<=n;c++){

            let current=table[r][c]
            if(c+1<=n) table[r][c+1]+=current
            if(r+1<=m) table[r+1][c]+=current


        }
    }
    return table[m][n]

}

console.log(uniquePath3(2,3))

