var maxProduct = function(nums) {
    
    let dp=new Array(nums.length).fill(0)
    for(let i=0;i<nums.length;i++){

        for(let j=i+1;j<nums.length;j++){
            let product=nums[i]*nums[j]
            dp[j]=product

        }
    }
   
    return Math.max(...dp)
};

// Time complexity of 0(n)

const maxProduct2=(nums)=>{
    let maxProduct=nums[0]
    let minProduct=nums[0]
    let answer=nums[0]

    for(let i=1;i<nums.length;i++){

        let temp=Math.max(nums[i],maxProduct*nums[i],minProduct*nums[i])
        
        minProduct=Math.min(nums[i],maxProduct*nums[i],minProduct*nums[i])

        max=temp

        answer=Math.max(answer,max)
    }

    return answer
}




console.log(maxProduct2([2,3,-2,4]))