var searchInsert = function(nums, target) {

    let low=0
    let high=nums.length-1
    let isFound=false

    while(low<=high){

        let mid=Math.floor((low+high)/2)

        if(nums[mid]===target){
            isFound=true
            return mid
        }
       
        if(target<nums[mid]){
            high=mid-1
        }
        else{
            low=mid+1
        }
    }

    if(isFound===false){
        nums.push(target)
        let index=nums.sort((a,b)=>a-b).indexOf(target)
        return index
    }
    
};
const nums = [1,3,5,6]

let target = 2

const answer=searchInsert(nums,target)

console.log(answer)