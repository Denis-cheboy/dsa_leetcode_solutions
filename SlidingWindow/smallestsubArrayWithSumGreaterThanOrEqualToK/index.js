const smallestSumSubArray=(nums,k)=>{

    let windowSum=0
    let minLength=Infinity
    let windowStart=0
    let windowEnd=0

    for(windowEnd;windowEnd<nums.length;windowEnd++){
        windowSum+=nums[windowEnd]

        while(windowSum>=k){
            minLength=Math.min(minLength,windowEnd-windowStart+1)
            console.log(windowSum)
            windowSum-=nums[windowStart]
            windowStart+=1
        }

    }
    return minLength
}

console.log(smallestSumSubArray([1,4,-3,2,7,8],5))