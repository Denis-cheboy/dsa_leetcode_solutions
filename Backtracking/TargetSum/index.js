// My way here
const findTargetSumWays = function(nums, target) {
    
    if(nums.length===1 && target===nums[0]) return 1

    let count=0

    function generateWays(nums,index,sum){

        if(index>=nums.length){
            if(sum===target) count++
            return 
        }

        generateWays(nums,index+1,sum+nums[index])
        generateWays(nums,index+1,sum-nums[index])

    }

    generateWays(nums,0,0)

    return count
};

// Another way =>DP solution



