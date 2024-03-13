var maxSubArray = function(nums) {
    let i=0

    let largestSum=nums[0]

   for(let i=1;i<nums.length;i++){
      
    nums[i]=nums[i-1]+nums[i]

    if(nums[i]>largestSum){
        largestSum=nums[i]
    }

   }
    return largestSum
};

console.log(maxSubArray([5,4,-1,7,8]))