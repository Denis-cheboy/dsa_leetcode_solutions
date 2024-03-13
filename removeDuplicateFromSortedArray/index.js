var removeDuplicates = function(nums) {
    let count = 1;
   let movingPosition = 1;
   let pos = 1;
   for (let i = 0; i < nums.length - 1; i++) {
     if (nums[i] === nums[i + 1]) {
       movingPosition = pos;
     } else if (nums[i] !== nums[i + 1]) {
       nums[movingPosition] = nums[i + 1];
       movingPosition++;
       pos++;
       count++;
     }
   }
   console.log(nums)
   return count;
 };

const count=removeDuplicates([0,0,1,1,1,2,2,3,4,5])
console.log(count)