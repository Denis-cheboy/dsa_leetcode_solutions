// approach 1
const partition=(nums)=>{
    let totalSum = nums.reduce((acc, curr) => acc + curr);
    if (totalSum % 2) return false;

    const target = totalSum / 2;
    const memo = new Set([0]);

    for (let number of nums) {
        let possibleSums = Array.from(memo);
        for (let possibleSum of possibleSums) {
            memo.add(possibleSum + number);
        }
    }
    return memo.has(target);

}
// another approach
var canPartition = function(nums) {
    
    let sum=nums.reduce((a,b)=>a+b)

    if(sum%2 !==0){
        return false
    }

    let half=sum/2 

    let dp=[]

    dp[0]=true

    for(let index=0;index<nums.length;index++){
        let num=nums[index]
        console.log(num)

        for(let i=half;i>=num;i--){
            dp[i]=dp[i] || dp[i-num]
        }
    }

    return dp[half] || false


};
// another approach
var canPartition2 = function(nums) {
    if(!nums) return false
    let total = nums.reduce((a,b) => a + b, 0)
    
    if(total%2 != 0) return false
    
    let target = total /2
    let arr = new Array(target + 1).fill(false)
    arr[0] = true
    
    for(let el of nums) {
        
        for(let i = target; i >=0; i--) {            
            let complement = i - el
            
            if(!arr[i] && arr[complement]){
                arr[i] = true
            }
            if(arr[target] == true) return true
        }
    }
    
    return false
};

const partition4=(nums)=>{
    let sum=nums.reduce((a,b)=>a+b)

    if( sum%2 !== 0 )
    return false;

    let subsetSum = sum/2;
    let cache = new Array(nums.length).fill(-1).map(a => new Array(subsetSum+1).fill(-1) );
    return findSubsetSum( 0, subsetSum, cache );

    function findSubsetSum( i, s, cache ) {
        if( s === 0 )
            return true
        else if( i === nums.length || s < 0 )
            return false
        
        if( cache[i][s] !== -1 )
            return cache[i][s];
        
        return cache[i][s] = findSubsetSum( i+1, s-nums[i], cache ) || findSubsetSum( i+1, s, cache );
    }

}



console.log(canPartition([1,5,11,5]))