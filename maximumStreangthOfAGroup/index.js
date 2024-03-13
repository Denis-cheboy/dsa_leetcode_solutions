var maxStrength = function(nums) {
    if(nums.length===1) return nums[0]

    nums.sort((a,b)=>a-b)

    let k=1

    for(let i=0;i<nums.length-1;i++){
        console.log("i",i)
        if(nums[i]<0 && nums[i+1]<0){
            k*=nums[i]*nums[i+1]
            i++
            console.log( "continue","i",i)
            continue
        }
        if(nums[i]>0){
            k*=nums[i]
        }
    }
    if(nums[nums.length-1]>0){
        k*=nums[nums.length-1]
    }
    if(nums[nums.length-1]===0 && k===1){
        k*=0
    }
    return k
};

// another way ressembles the maximumProductSubArray
var maxStrength2 = function (nums) {
    const n = nums.length;
    let prevMax = nums[0];
    let prevMin = nums[0];
    for (let i = 1; i < n; i++) {
        const nextMax = Math.max(
            prevMax, // Ignore current
            nums[i], // Just use current
            prevMax * nums[i], // Use current and previous
            prevMin * nums[i]
        );
        const nextMin = Math.min(
            prevMin,
            nums[i],
            prevMin * nums[i],
            prevMax * nums[i]
        );
        prevMax = nextMax;
        prevMin = nextMin;
    }
    return prevMax;
};


console.log(maxStrength([3,-1,-5,2,5,-9]))
// first approach discussion
// sort the array first => [-5,-1,2,3,5,5,9]