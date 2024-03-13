const isEqual=(root)=>{
    return root.val===(root.right.val+root.left.val)
}

console.log(isEqual())