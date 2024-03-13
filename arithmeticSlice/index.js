// Wrong approach, the sequence should be contigious i.e consercutive
// this is situable for all subsequences
const arithmeticSlice=(nums)=>{
  if(nums.length<3){
        return 0
   }


    let len=nums.length
    let max=0
    let res=[]

    function generateSequneces(nums,index,comb){

        if(index in memo) return memo[index]

        if(index>=len){
            if(comb.length>=3){
                if(checkSequence(comb)){
                    max++
                }
            }
            return
        }
        comb.push(nums[index])

        generateSequneces(nums,index+1,comb,memo)
        comb.pop()

        generateSequneces(nums,index+1,comb,memo)

        memo[index]=comb
    }

    function checkSequence(comb){
        
        let right=2

        let prevDiff=comb[1]-comb[0]

        while(right<comb.length){
            let currentDiff=comb[right]-comb[right-1]

            if(prevDiff!==currentDiff){
                prevDiff=currentDiff
            }
            else{
                return true
            }
            right++
        }

        return false

    }

    generateSequneces(nums,0,[])
    return max
}

// dp solution 
var numberOfArithmeticSlices = function (nums) {
  
	let sum = 0,
    dp = Array(nums.length).fill(0);

    for (var i = 2; i <= dp.length - 1; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp[i] = 1 + dp[i - 1];
            sum += dp[i];
        }
    }

   return sum;

};

// Two pointer approach O(n) SC:O(n)
var numberOfArithmeticSlices2 = function(A) {
    let i = 0, j = 2;
    let count = 0;
    let gap = A[1] - A[0];
    
    while(j < A.length) {
        const currentGap = A[j] - A[j-1];
        
        if(currentGap === gap) {
            count += (j - i - 1);
            j++;
        } else {
            i = j - 1;
            j = j + 1;
            gap = currentGap;
        }
    }
    return count;
};
console.log(numberOfArithmeticSlices([1,2,3,4,6,7]))