const symetricTree=(root)=>{
    if(root==null) return true
    
    return isMirror(root.left,root.right)

    function isMirror(leftNode,rightNode){
        if(leftNode ==null && rightNode==null) return true

        if(leftNode==null || rightNode==null) return false

        return leftNode.val===rightNode.val && isMirror(leftNode.left,rightNode.right) && isMirror(leftNode.right,rightNode.left)
    }

}

// iterative way

const symetricTree2=(root)=>{
    if(root==null) return true

    let stack=[[root.left,root.right]]

    while(stack.length>0){
        const [leftNode,rightNode]=stack.pop()

        if(leftNode==null && rightNode==null) continue

        if(!leftNode || !rightNode || leftNode.val!==rightNode.val) return false

        stack.push([leftNode.left,rightNode.right])
        stack.push([leftNode.right,rightNode.left])

    }

    return true
}

console.log(symetricTree)