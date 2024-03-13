const missing=(arr,n)=>{

    let totalSum=Math.floor(n*(n+1)/2)

    for(let i=0;i<arr.length;i++){
        totalSum-=arr[i]
    }

    return totalSum
}

console.log(missing([1,2,3],4))