const sumOfLeftLeaves=(root)=>{
    if(root==null) return 0

    let sum=0

    dfs(root)

    return sum

    function dfs(root){
        if(root==null) return 0

        if(root.left==null && root.right==null) return root.val

        let left=dfs(root.left)

        sum+=left

        dfs(root.right)

    }

}
// another clever way here
const sumOfLeftLeaves2 = (x, isLeft) => {
    if (!x) return 0
    if (!x.left && !x.right && isLeft) return x.val
    
    return sumOfLeftLeaves(x.left, true) + sumOfLeftLeaves(x.right, false)
}