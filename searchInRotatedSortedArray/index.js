var search = function(nums, target) {
    
    let low=0
    let high=nums.length-1

    while(low<=high){
        let mid=Math.floor((low+high)/2)

        if(nums[mid]===target) return mid

       if(nums[low]<=nums[mid]){
          if(nums[low]<=target && target<=nums[mid]){
             high=mid-1
          }
          else{
            low=mid+1
          }
       }
       else{
        if(nums[mid]<=target && target<=nums[high]){
            low=mid+1
        }
        else{
            right=mid-1
        }

       }

    }
    return -1
 };

 const nums= [4,5,6,7,0,1,2]

 const answer=search(nums,0)
 console.log(answer)