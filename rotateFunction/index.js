const rotate=(nums)=>{
    if(nums.length===1 || nums.length===0) return 0

    let max=0

    function helper(nums,index){
        if(index===nums.length) return 

        let totalSum=0

        for(let i=0;i<nums.length;i++){
            totalSum+=nums[i]*i
        }
        if(totalSum>max){
            max=totalSum
        }
        
        let end=nums[nums.length-1]

        helper([end,...nums.slice(0,nums.length-1)],index+1)

    }



    helper(nums,0)

    return max

}

// one way here
// TC:O(n) SC:O(1)
var maxRotateFunction = function(nums) {
    
    const sum=nums.reduce((acc,curr)=>acc+curr)
    let fx=nums.reduce((acc,curr,idx)=>acc+curr*idx,0)

    let maxF=fx

    for(let i=nums.length-1;i>0;i--){
        fx+=sum-nums.length*nums[i]
        maxF=Math.max(maxF,fx)
    }
};

// another way
const rotate2=(A)=>{
    let n = A.length;

    let sum = 0
    let currFSum = 0
    A.forEach((e, i) => {
        sum += e;
        currFSum += e * i
    })

    let maxFSum = currFSum
    for (let i = 0; i < n - 1; i++) { // 1 iteration will be repeated if <n, but ans will be same
        currFSum = n * A[i] - sum + currFSum
        maxFSum = Math.max(maxFSum, currFSum)
    }
    return maxFSum;
}

const rotate3=(nums)=>{
    let allSum = 0;
    let len = A.length;
    let F = 0;
    for (let i = 0; i < len; i++) {
        F += i * A[i];
        allSum += A[i];
    }
    let max = F;
    for (let i = len - 1; i >= 1; i--) {
        F = F + allSum - len * A[i];
        max = Math.max(F, max);
    }
    return max; 
}

console.log(rotate([4,3,2,6]))