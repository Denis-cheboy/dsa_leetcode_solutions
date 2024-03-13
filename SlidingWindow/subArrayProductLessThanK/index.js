/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {

    if(k<=1) return 0

    let count=0
    let left=0
    let right=0
    let product=1

    while(right<nums.length){
        
        product*=nums[right]

        while(product>=k){
            product/=nums[left]
            left++
        }
        count+=right-left+1
        right++ 
    }

    return count


};

// another way using for loop
var numSubarrayProductLessThanK = function(nums, k) {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    if (k <= 1) return 0;
    let start = 0, product = 1, count = 0;
    for (let end = 0; end < nums.length; end++) {
        product *= nums[end];
        // ensure subarray product is less than k
        while (product >= k && start <= end) {
            product /= nums[start++];
        }
        count += end - start + 1;
    }
    return count;
    // T.C: O(N)
    // S.C: O(1)
};