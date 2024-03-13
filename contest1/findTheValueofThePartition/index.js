const partion=(nums)=>{
    nums.sort((a,b)=>a-b)
    
    let left=0
    let right=1
    let diff=Infinity
    
    while(right<nums.length){
        let numDif=Math.abs(nums[left]-nums[right])
        
        if(numDif<diff){
            diff=numDif
        }
        left++
        right++
    }
    
    return diff
}

console.log(partion([59,51,1,98,73]))