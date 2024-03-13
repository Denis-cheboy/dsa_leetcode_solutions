const threeSum=(nums)=>{
    let result=[]

    if(nums.length<3){
        return result
    }

    let target=0
    nums.sort((a,b)=>a-b)

    for(let i=0;i<nums.length-2;i++){

        if(nums[i]>target) break 

        if(i>0 && nums[i]===nums[i-1]) continue 

        let low=i+1
        let high=nums.length-1

        while(low<high){
            let sum=nums[i]+nums[low]+nums[high]

            if(sum===target){
                result.push([nums[i],nums[low],nums[high]])

                while(nums[high]===nums[high-1]) high--
                while(nums[low]===nums[low+1]) low++

                high--
                low++

            }
            else if(sum>target){
                high--
            }
            else{
                low++

            }
        }


    }

    return result


}


const res=threeSum([-1,0,1,2,-1,4],2)
console.log(res)