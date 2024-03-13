const searchBinaryTree=(root)=>{
    if(!root) return null

    function dfs(root,val){
        if(!root) return null

        if(root.val===val) return root

        if(val>root.val){
            return dfs(root.right,val)
        }
        else{
           return  dfs(root.left,val)
        }
    }

    return dfs(root,val)
}

console.log(searchBinaryTree())