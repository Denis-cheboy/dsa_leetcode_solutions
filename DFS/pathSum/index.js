const sum=()=>{
    if(root==null) return false

    function dfs(root,targetSum){

       if(root==null) return false

       if(root.val===targetSum && (root.left==null && root.right==null)) return true

       return dfs(root.left,targetSum-root.val) || dfs(root.right,targetSum-root.val)

    }
    return dfs(root,targetSum)
}

console.log(sum())