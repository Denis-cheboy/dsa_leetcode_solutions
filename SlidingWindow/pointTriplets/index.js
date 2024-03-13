// research manzee
const pointTriplets=(nums,target)=>{

    let left=0
    let right=1

    while(right<nums.length){

        let diff=nums[right]-nums[left]

        while(diff>target){
            diff-=nums[left]
            left++
        }
        if(diff<=target){

        }
    }
}