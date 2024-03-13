// runs at O(n^2) due to the two for loops that iterate through the entire array independently
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=1;j<nums.length;j++){
            if(nums[j]===(target-nums[i])){
                return [i,j];
            }
        }
    }
};


// runs at O(n) sinces maps does a near constant lookup, with a space complecity of O(1)
const twoSum=(nums,target)=>{
    const table=new Map()
    for(let i=0;i<nums.length;i++){
        table.set(nums[i],i)
    }
    for(let i=0;i<nums.length;i++){
        const complement=target-nums[i]
        if(table.has(complement) && table.get(complement)!==i){
            return [i,table.get(complement)]
        }
    }

}

twoSum([3,3],6)

