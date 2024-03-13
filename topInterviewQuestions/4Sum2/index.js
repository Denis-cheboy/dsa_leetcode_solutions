// the idea here is to check for the frequecy of sum between two arrays,
// i.e store the sum generated from nums1 and nums2 in a a hash map, the key been the sum and value as the frequency
// then perfom the same on nums3 and nums4 checking for the frequency in the has table and increamenting our output

const sum=(nums1,nums2,nums3,nums4)=>{
    if (!nums1 || !nums2 || !nums3 || !nums4) return [];
    // cuadratic solution... counter, reduced from sum_of_two
    let memory = new Map();
    for (let i of nums1) {
        for (let j of nums2) {
            memory.set(-(i + j), memory.get(-(i + j)) + 1 || 1);
        }
    }
    // look in the map if we have seen the complement of this sum
    let output = 0;
    for (let m of nums3) {
        for (let n of nums4) {
            output += memory.has(m + n)? memory.get(m + n): 0;
        }
    }
    return output;
}

// another way 
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    if(!nums1 || !nums2 || !nums3 || !nums4) return 0

    if(nums1[0]==0 && nums2[0]==0 && nums3[0]==0 && nums4[0]==0 && nums1.length==1) return 1

    let res1=[]
    let res2=[]

    for(let i of nums1){
        for(let j of nums2){
           res1.push(i+j)
        }
    }

    let output=0

    for(let m of nums3){
        for(let n of nums4){
           res2.push(m+n)
        }
    }

    for(let i of res1){
        for(let j of res2){
            if((i+j)===0) output++
        }
    } 

    return output
    
};
console.log(sum(nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]))