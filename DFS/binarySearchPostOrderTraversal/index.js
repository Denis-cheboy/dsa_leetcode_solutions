const postOrder=(root)=>{

    if(root==null) return []



    let right=postOrder(root.right)
    let left=postOrder(root.left)

    

    return [...left,...right,root.val]

    
}

// iteratively 

const postOrder2=(root)=>{

    let stack=[root]
    
    let res=[]

    while(stack.length>0){
        let current=stack.pop()

        if(current){
            res.push(current.val)
            if(current.left){
                stack.push(current.left)
            }

            if(current.right){
                stack.push(current.right)
            }
            
        }
    }

    return res.reverse()
}