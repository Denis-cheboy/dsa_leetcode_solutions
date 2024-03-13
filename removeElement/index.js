const removeElement=(nums,target)=>{

    let i=0

    for(let j=0;j<nums.length;j++){

        if(nums[j]!==target){

            nums[i]=nums[j]
            i++
        }
    }

    return i
}

// approach 2

const removeElement2=(nums,target)=>{

    let i=0

    let length=nums.length-1

    while(i<length){
        
        if(nums[i]===val){
            nums[i]=nums[length-1]
            length--
        }
        else{
            i++
        }
    }
    return length
}

const elementArray=removeElement([3,2,2,3],2)
console.log(elementArray)