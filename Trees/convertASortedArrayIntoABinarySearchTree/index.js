const convert=(nums)=>{

    if(nums.length===0) return null
    
    let mid=Math.floor(nums.length/2)
    
    let root=new TreeNode(nums[mid])

    root.left=convert(nums.slice(0,mid))
    root.right=convert(nums.slice(mid+1))

    return root
}

console.log(convert())


