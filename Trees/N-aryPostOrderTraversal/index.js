const postOrder=(root)=>{
    const res=[]

    traverse(root)
    return res
 
    function traverse(node){
        if(!node) return 
 
        for(let child of node.children){
            traverse(child)
        }
        res.push(node.val)
    }
}

// BFS

const postOrder2=(root)=>{

    let stack=[root]
    
    let res=[]

    while(stack.length){
        let curr=stack.pop()
        if(!curr) continue
        res.push(curr.val)
        stack.push(...curr.children)
    }

    return res.reverse()
}