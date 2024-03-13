// recursive solution

var rob = function(nums) {
    
    if(nums.length<=3) return Math.max(...nums)

    let numsWithoutFirst=nums.slice(1)
    let numsWithoutLast=nums.slice(0,nums.length-1)

    return Math.max(dfs(numsWithoutFirst,numsWithoutFirst.length-1,memo={}),dfs(numsWithoutLast,numsWithoutLast.length-1,memo={}))


    function dfs(nums,i,memo={}){
        if(i<0) return 0

        if(i in memo) return memo[i]

        let res=Math.max(dfs(nums,i-2,memo)+nums[i],dfs(nums,i-1,memo))

        memo[i]=res

        return res

    }
};

const rob2=(nums)=>{
    
}

console.log(rob([2,3,2]))