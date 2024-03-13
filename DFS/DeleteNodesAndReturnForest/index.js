// one way
const deleteNode=()=>{
    if(root==null) return root
    const set=new Set(to_delete)
    const res=[]   

    const dfs=(node)=>{
        if(node==null) return node
    
        node.left=dfs(node.left)
        node.right=dfs(node.right)
    
        if(set.has(node.val)){
            if(node.left) res.push(node.left)
            if(node.right) res.push(node.right)
            return null
        }
    
        return node
    
    }
    
    if(!set.has(root.val)) res.push(root)
    dfs(root)
    return res
}

// another way=>
// A technique used here is that whenever we found a node to be deleted, 
// we don't return null right away. This will cut off our paths to other nodes.
//  Instead, we save its state as shouldDelete and set it to null in the backtracking stage.

const deleteNode2=(root,to_delete)=>{
    if(root==null) return root

    let set=new Set(to_delete)

    let roots=[]

    function dfs(root,isRoot){
        if(root==null) return null

        let shouldDelete=set.has(root.val)

        if(isRoot && !shouldDelete) roots.push(root)
        
        let left=dfs(root.left,shouldDelete)
        let right=dfs(root.right,shouldDelete)

        return shouldDelete?null:root 

    }

    dfs(root,true)
    return roots
}



