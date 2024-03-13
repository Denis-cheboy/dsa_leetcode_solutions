const fourSum=(nums,target)=>{
    let result=[]
    if(nums.length<3){
        return result
    }

    nums.sort((a,b)=>a-b)

    for(let i=0;i<nums.length-3;i++){

        for(let j=i+1;j<nums.length-2;j++){

            let first=nums[i]
            let start=nums[j]
            let low=j+1
            let high=nums.length-1


            while(low<high){

                let sum=first+start+nums[low]+nums[high]

                if(sum===target){
                    result.push([first,start,nums[low],nums[high]])

                    while(nums[low] ===nums[low+1]) low++
                    while(nums[high]===nums[high-1]) high--

                    low++
                    high--
                }
                else if(sum<target){
                    low++
                }
                else{
                    high--
                }

            }
            while(nums[j]===nums[j+1]) j++
        }
        while(nums[i]===nums[i+1]) i++
    }
    return result
}

const result=fourSum([1,0,-1,0,-2,2],0)

console.log(result)


 