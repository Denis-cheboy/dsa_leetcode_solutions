
var lowestCommonAncestor = function(root, p, q) {
    if(root==null) return root

    return dfs(root,p,q)

    function dfs(root,p,q){
        if(root==null || p.val===root.val || q.val===root.val) return root
        
        if(p.val<root.val && q.val<root.val){
            return dfs(root.left,p,q)
        }
        
        if(p.val>root.val && q.val>root.val){
            return dfs(root.right,p,q)
        }

        if(!root.left){
            return root.right
        }

        if(!root.right){
            return root.left
        }
        
        return root
       
        
    }
};