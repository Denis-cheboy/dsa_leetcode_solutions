// recursive approach 

const sumOfNodesWithEvenValuedGrandParents=(root)=>{
    if(root==null) return 0

    return helper(root,1,1)

    function helper(root,parent,grandParent){
        if(root==null) return 0

        return helper(root.left,root.val,parent)+helper(root.right,root.val,parent)+(grandParent%2===0?node.val:0)
    }
}
// another way here

const sum=(root)=>{
    if(root==null) return 0
    let res=0

    dfs(root,null,null)

    return res

    function dfs(root,parent,grandParent){

        if(root==null) return 0

        if(grandParent!=null && grandParent.val%2===0){
            res+=root.val
        }
        dfs(root.left,root,parent)
        dfs(root.right,root,parent)
    }
}