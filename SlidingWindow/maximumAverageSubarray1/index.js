/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let sum=0

    for(let i=0;i<k;i++){
        sum+=nums[i]
    }

    let max=sum

    for(let i=k;i<nums.length;i++){
        sum=sum-nums[i-k]+nums[i]
        max=Math.max(max,sum)
    }

    return max/k
    
};

// const findMaxAverage=(nums,k)=>{
    
//     let start=0
//     let end=0
//     let maxSum=-Infinity

//     for(end;end<=nums.length-k;end++){
//         maxSum+=nums[end]

//         if()
//     }
// }