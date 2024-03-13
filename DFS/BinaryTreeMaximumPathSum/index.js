const maximumPathSum=(root)=>{
    if(root==null) return root

    let max=0

    dfs(root)

    return max

    function dfs(root){
        if(root==null) return 0

        let leftGain=Math.max(dfs(root.left),0)

        let rightGain=Math.max(dfs(root.right),0)

        let currentMaxPath=root.val+leftGain+rightGain

        max=Math.max(currentMaxPath,max)
        
        return root.val+Math.max(leftGain,rightGain,0)

    }
}