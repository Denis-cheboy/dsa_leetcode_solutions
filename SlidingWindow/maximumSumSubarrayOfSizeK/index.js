const maximumSumSubarray=(nums,k)=>{
    let windowStart=0
    let windowEnd=0
    let maxSum=-Infinity
    let windowSum=0

    for(windowEnd;windowEnd<nums.length;windowEnd++){
        windowSum+=nums[windowEnd]

        if(windowEnd>=k-1){
            maxSum=Math.max(windowSum,maxSum)
            windowSum-=nums[windowStart]
            windowStart+=1
        }
    }

    return maxSum
}


console.log(maximumSumSubarray([1,4,-3,2,7,8],3))