/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    let left=0
    let right=0
    let sum=0
    let res=0
  
    while(right<nums.length){
        sum+=nums[right]
  
        while(sum>=target){
            let len=right-left+1
  
            if(res===0 || len<res) res=len
  
            sum-=nums[left]
            left++
        }
        right++
    }
  
    return res
  
  };