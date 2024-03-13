/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {

    let result=""

    for(let i=0;i<nums.length;i++){

        if(nums[i][i]==="0"){
            result+="1"
        }
        else{
            result+="0"
        }
    }


    return result
};

// another way

var findDifferentBinaryString = function(nums) {
    return nums.map((s, i) => s[i] == 1 ? '0' : '1').join('');
};
