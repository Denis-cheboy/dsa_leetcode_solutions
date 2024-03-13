// brute force approach TC:0(n!) the calculate function will be called maximum of n! times
// space complexity will be 0(n) because of the recursion depth
const wiggleSubsequence=(nums)=>{
    

    if(nums.length<2){
        return nums.length
    }
    return 1+Math.max(calculate(nums,0,true),calculate(nums,0,false))

    function calculate( nums,index,isUp){

        let maxCount=0

        for(let i=index+1;i<nums.length;i++){
            if((isUp && nums[i]>nums[index]) || (!isUp && nums[i]<nums[index])){
                maxCount=Math.max(maxCount,1+calculate(nums,i,!isUp))
            }
        }
        return maxCount
    }

}

// dynamic programming 
// TC: O(n^2) because of the loop in a loop 
// SC: O(n)
const wiggleSubsequence2=(nums)=>{
    let up=Array(nums.length)
    let down=Array(nums.length)

    for(let i=1;i<nums.length;i++){

        for(let j=0;j<i;j++){

            if(nums[i]>nums[j]){
                up[i]=Math.max(up[i],down[j]+1)
            }
            else{
                down[i]=Math.max(down[i],up[j]+1)
            }
        }
    }
    return 1+Math.max(down[nums.length-1],up[nums.length-1])
}

// linear  dynamic programming 2
// time complexty O(n) SC:O(n)
const wiggleSubsequence3=()=>{
    if(nums.length<2){
        return nums.length
    }

    let up=Array(nums.length)
    let down=Array(nums.length)

    up[0]=1
    down[0]=1

    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            up[i]=down[i-1]+1
            down[i]=down[i-1]
        }
        else if(nums[i]<nums[i-1]){
            down[i]=up[i-1]+1
            up[i]=up[i-1]
        }
        else{
            down[i]=down[i-1]
            up[i]=up[i-1]
        }
    }

    return Math.max(down[nums.length-1],up[nums.length-1])
}

// with optimized space
// relies deeply on the 3 approach, since updating up[i] and down[i] both depends on the previous values of up and down respectively
// we can therefore just maiintaing the previous values
const wiggleSubsequence5=(nums)=>{
    if(nums.length<2){
        return nums.length
    }

    let down=1
    let up=1

    for(let i=1;i<nums.length;i++){

        if(nums[i]>nums[i-1]){
            up=down+1
        }
        else if(nums[i]<nums[i-1]){
            down=up+1
        }
    
    }

    return Math.max(down,up)
}
// greedy solution
// got it well well

const wiggleSubsequence4=()=>{
    if(nums.length<2){
        return nums.length
    }

    let prevDiff=nums[1]-nums[0]
    let count=prevDiff !=0?2:1

    for(let i=2;i<nums.length;i++){

        let diff=nums[i]-nums[i-1]

        if((diff>0 && prevDiff<=0) || (diff<0 && prevDiff>=0)){
            count++
            prevDiff=diff
        }
    }
    return count
}
console.log(wiggleSubsequence([1,7,4,9,2,5]))