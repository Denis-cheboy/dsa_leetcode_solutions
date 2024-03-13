const inorderTraversal=(root)=>{
    if(root===null) return []

    let left=inorderTraversal(root.left)
    let right=inorderTraversal(root.right)

    return [...left,root.val,...right]
}

// iterative approach
const inorderTraversal2=(root)=>{

    let res=[]
    let stack=[]

    while(stack.length>0 || root!=null){
        
        while(root!=null){
            stack.push(root)
            root=root.left
        }
        root=stack.pop()
        res.push(root.val)

        root=root.right
    }
    return res
}
console.log(inorderTraversal(root))