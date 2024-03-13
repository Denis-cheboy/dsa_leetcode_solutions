var threeSumClosest = function(nums, target) {
    let result=nums[0]+nums[1]+nums[nums.length-1]
    

    nums.sort((a,b)=>a-b)


    for(let i=0;i<nums.length-2;i++){

        let high=nums.length-1
        let low=i+1

        while(low<high){
            let sum=nums[i]+nums[low]+nums[high]

            if(sum>target){
                high--
            }
            else{
                low++
            }
            console.log(`results-target ${result-target}`)
            console.log(`sum - target ${sum-target}`)
           if(Math.abs(sum-target)<Math.abs(result-target)){
              result=sum
           }
            
        }
    }

    return result
   
};
let nums = [-1,2,1,-4]

let target = 1

const answer=threeSumClosest(nums,target)

console.log(answer)