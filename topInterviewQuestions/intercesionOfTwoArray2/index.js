const intercession=(nums1,nums2)=>{
    nums1.sort((a,b)=>a-b)
    nums2.sort((a,b)=>a-b)
 
    while(nums1.length && nums2.length){
 
        if(nums1[0]===nums2[0]){
            result.push(nums1.shift())
            nums2.shift()
        }
        else if(nums1[0]>nums2[0]){
            nums2.shift()
        }
        else{
            nums1.shift()
        }
    }
    return result
}

// another way 
const intersection2= (nums1, nums2) => {
    if (nums1.length <= nums2.length) {
        return findCommonElements(nums1, nums2)
    } 
   return findCommonElements(nums2, nums1)
}

const findCommonElements = (nums1, nums2) =>{
    const results = []
    nums1.map(item => {
        if(nums2.includes(item)) {
           results.push(item)
           nums2.splice(nums2.indexOf(item), 1)
        }
    })
    return results
}

console.log(intercession( nums1= [4,9,5], nums2 = [9,4,9,8,4]))