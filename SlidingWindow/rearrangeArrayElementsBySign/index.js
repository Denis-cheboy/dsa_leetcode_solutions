var rearrangeArray = function(nums) {
    
    let positives=[]
    let negatives=[]

    nums.forEach(n=>n>=0?positives.push(n):negatives.push(n))

    let j=0

    for(let i=0;i<nums.length;i+=2){
        nums[i]=positives[j]
        nums[i+1]=negatives[j]
        j++
    }

   return nums

};