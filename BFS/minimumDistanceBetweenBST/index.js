const minDif=(root)=>{
    if(root==null) return 0

    let min=Infinity
    let prev=null

    function dfs(root){
        if(root==null) return min

        dfs(root.left)

        if(prev!=null){
            min=Math.min(min,Math.abs(root.val-prev))
        }
        prev=root.val
        
        dfs(root.right)

    }

    dfs(root)

    return min
}