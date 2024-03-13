// dp solution with memoisation
const houseRobber=(nums)=>{
    let dp=new Array(nums.length+1)

    dp[0]=0
    dp[1]=nums[0]

    for(let i=1;i<nums.length;i++){

        let val=nums[i]

        memo[i+1]=Math.max(memo[i],memo[i-1]+val)

    }
    return memo[nums.length]
}


// recursive solution
const houseRobber2=(nums)=>{

    return dfs(nums,nums.length-1)

    function dfs(nums,i,memo={}){

        if(i<0){
            return 0
        }
        if(i in memo) return memo[i]

        let res=Math.max(dfs(nums,i-2)+nums[i],dfs(nums,i-1))
        memo[i]=res
        return res
    }
    
}

console.log(houseRobber([2,7,9,3,1]))