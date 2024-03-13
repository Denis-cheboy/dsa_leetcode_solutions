const lowestCommon=()=>{
    if(root==null) return root

    let maxDepth=-1
    let lca=null
    dfs(root,0)
    return lca

    function dfs(root,depth){

        if(root==null){
            return
        }

        if(root.left==null && root.right==null){
            if(depth>maxDepth){
                maxDepth=depth
                lca=root
            }
            return depth
        }

        let leftDepth=dfs(root.left,depth+1)
        let rightDepth=dfs(root.right,depth+1)

        if(leftDepth===maxDepth && leftDepth===rightDepth){
            lca=root
        }
        
        return Math.max(leftDepth?leftDepth:-1,rightDepth?rightDepth:-1)
    }

}
// another way 
var lcaDeepestLeaves2 = function(root) {
    const findDeepsetAncestor = (node = root) => {
        if (!node) return { node: null, deep: 0 };
        const left = findDeepsetAncestor(node.left);
        const right = findDeepsetAncestor(node.right);

        if (left.deep > right.deep) return { node: left.node, deep: left.deep + 1 };
        if (left.deep < right.deep) return { node: right.node, deep: right.deep + 1 };
        return { node, deep: left.deep + 1 };
    };

    return findDeepsetAncestor().node;
};

console.log(lowestCommon())