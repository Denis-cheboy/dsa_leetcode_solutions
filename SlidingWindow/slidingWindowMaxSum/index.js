/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

    let res=[]

    let queue=[]

    for(let i=0;i<nums.length;i++){

        while(queue && nums[queue[queue.length-1]]<=nums[i]){
            queue.pop()
        }
        
        queue.push(i)

        if(queue[0]===i-k){
            queue.shift()
        }

        if(i>=k-1){
            res.push(nums[queue[0]])
        }
    }

    return res

};