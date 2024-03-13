
var searchRange = function(nums, target) {
    let result=[-1,-1]

    if(nums.length===0){
        return result
    }

    let low=0
    let high=nums.length-1

    while(low<=high){
        let mid=Math.floor((low+high)/2)

        if(nums[mid]===target){
            result[0]=nums.indexOf(target)
            result[1]=nums.lastIndexOf(target)
            return result
        }
        
        if(target<nums[mid]){
            high=mid-1
        }
        else{
            low=mid+1
        }

    }
    return result
};

const nums = [1]
const answer=searchRange(nums,1)

console.log(answer)