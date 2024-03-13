const contegiuosPlots=(nums,target)=>{

    let left=0
    let right=0
    let sum=0

    while(right<nums.length){

        sum+=nums[right]

        while(sum>=target){

            if(sum===target){
                return [left,right]
            }
            sum-=nums[left]
            left++
        }
        right++
    }
}

console.log(contegiuosPlots([3,2,4,1,5],7))