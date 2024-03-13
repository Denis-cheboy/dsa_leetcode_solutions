const deepestLeaves=(root)=>{
    
    let height=0
    let maxNode=null

    dfs(root,0)

    return maxNode

    function dfs(node,currDepth){
        if(node==null) return currDepth-1

        height=Math.max(height,currDepth)

        const leftDepth=dfs(node.left,currDepth+1)
        const rightDepth=dfs(node.right,currDepth+1)

        if(leftDepth===height && rightDepth===height){
            maxNode=node
        }

        return Math.max(leftDepth,rightDepth)

    }

}