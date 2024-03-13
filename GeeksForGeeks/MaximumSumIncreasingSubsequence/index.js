const maximumSum=(arr,n)=>{
      
    let max=0
    
    let dp=new Array(n)
    
    for(let i=0;i<n;i++){
        dp[i]=arr[i]
    }
    
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            
            if(arr[i]>arr[j] && dp[i]<dp[j]+arr[i]){
                dp[i]=dp[j]+arr[i]
                // console.log(dp)
            }
        }
    }
   
//    for(let i=0;i<n;i++){
//        max=Math.max(max,dp[i])
//    }
   
//    return max

return Math.max(...dp)
}

console.log(maximumSum([1,101,2,3,100],5))