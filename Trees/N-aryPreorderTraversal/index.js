const preorder=(root)=>{

    if(!root) return output

    output.push(root.val)

    for(let child of root.children){
        preorder(child,ouput)
    }

    return output

}

// Iterative Nature

const preorder2=(root)=>{

    let stack=[root]
    let result=[]

    if(!root) return result

    while(stack.length>0){
        let curr=stack.pop()

        result.push(curr)

        for(let i=curr.children.length-1;i>=0;i--){
            stack.push(child)
        }
    }

    return result
}