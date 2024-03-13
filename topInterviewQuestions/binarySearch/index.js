const binarySearch=(nums,target)=>{
    let left=0
    let right=nums.length

    while(left<=right){
        let mid=Math.floor((right+left)/2)

        if(nums[mid]===target) return mid

        if(target<nums[mid]){
            right=mid-1
        }
        
        else{
            left=mid+1
        }
    }
    
    return -1
}
console.log(binarySearch(nums = [-1,0,3,5,9,12], target = 9))