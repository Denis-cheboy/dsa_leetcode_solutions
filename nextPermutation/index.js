var nextPermutation = function(nums) {
    
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            
            let large=nextLarge(i)
            swap(i,large)
            reverse(i+1)
            return nums
        }
    }
    
    function nextLarge(idx){
        for(let i=nums.length-1;i>idx;i--){
            if(nums[i]>nums[idx]) return i
        }
    }
    function swap(i,large){
        let nums1=nums[i]
        nums[i]=nums[large]
        nums[large]=nums1
    }

    function reverse(idx){
        let start=idx
        let end=nums.length

        while(start<end){
            swap(start,end)
            start++
            end--
        }
    }
    // if their is no next permutation, reverse the array
     nums.reverse()
};

const answer=nextPermutation([7,2,3,1,5,4,3,2,0])
console.log(answer)



