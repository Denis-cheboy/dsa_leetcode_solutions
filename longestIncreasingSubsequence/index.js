const increaseSequence=(nums)=>{
    var n = nums.length;
    if (!n) return 0;
    var len = 1;
    var dp = [nums[0]];
    for (var i = 1; i < n; i++) {
        if (dp[len - 1] < nums[i]) {
            dp[len++] = nums[i];
        } else {
            var left = 0, right = len - 1, num = nums[i];
            while (left < right) {
                var mid = left + Math.floor((right - left) / 2);
                if (dp[mid] < num) left = mid + 1;
                else right = mid;
            }
            dp[right] = num;
        }
    }
    return len;
}

// another way to do this
const longestSebsequence=(nums)=>{

    function binarySearch(arr,target){
        let left=0
        let right=arr.length-1

        while(left<right){
            let mid=Math.floor((right+left)/2)

            if(arr[mid]<target) left=mid+1
            if(arr[mid]>target) right=mid-1
        }
        return left
    }

    function getAnswer(nums){
        const sub=[nums[0]]

        for(let i=1;i<nums.length;i++){
            let currentVal=nums[i]

            if(currentVal>sub[sub.length-1]){
                sub.push(currentVal)
            }
            else{
                const j=binarySearch(sub,currentVal)
                sub[j]=currentVal
            }
        }
        return sub.length
    }
    return getAnswer(nums)
}

// another way to do this

const anotheWayAgain=(nums)=>{
    
    let sub=[nums[0]]

    for(let i=1;i<nums.length;i++){

        let currentVal=nums[i]

        let prevVal=sub[i-1]

        if(currentVal>prevVal){
            sub.push(currentVal)
        }
        else{
            let j=0
            while(currentVal>sub[j]){
                j++
            }
            sub[j]=currentVal
        }
    }
    return sub.length
}



console.log(increaseSequence([0,1,0,3,2,3]))