const minimumAbsDiff=(root)=>{
  
    let min=Infinity

    let prev=null

    return helper(root)

    function helper(root){
        if(root==null) return min

        helper(root.left)

        if(prev!=null){
            min=Math.min(min,root.val-prev)
        }
        prev=root.val
        
        helper(root.right)

        return min

    }
}

// Another way

const minimumAbsDiff2=(root)=>{

    if(root==null) return 0
    let min=Infinity

    let inorderTraversal=dfs(root)

    function dfs(root){
        if(root==null) return []

        let left=dfs(root.left)
        let right=dfs(root.right)

        return [...left.val,root.val,...right.val]
    }

    for(let i=1;i<inorderTraversal.length;i++){
        
        let absDiff=Math.abs(inorderTraversal[i-1]-inorderTraversal[i])

        min=Math.min(absDiff,min)
    }

    return min

}

console.log(minimumAbsDiff())