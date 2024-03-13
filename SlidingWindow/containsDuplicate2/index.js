var containsNearbyDuplicate = function(nums, k) {
    
    let map=new Map()

    for(let i=0;i<nums.length;i++){

        if(map.get(nums[i])>=0 && i-map.get(nums[i])<=k) return true
        map.set(nums[i],i)
    }
   

    return false
    
};

console.log(containsNearbyDuplicate([1,0,1,1],1))