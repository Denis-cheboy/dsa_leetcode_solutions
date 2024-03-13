const houseRobber=(root)=>{
    function helper(node){
        if(!node) return [0,0];
        const [lr,ln] = helper(node.left);
        const [rr, rn] = helper(node.right);
        return [node.val + ln + rn, Math.max(lr+rr, ln+rn, lr+rn, ln+rr)];
    }
    
    return Math.max(...helper(root));
}

var rob = function(root) {
    const dfs =(root)=>{
        //BASE CASE
        if(!root)return [0,0]

        //RESULT: from LEFT subtree
        const left = dfs(root.left);

        //RESULT: from LEFT subtree
        const right = dfs(root.right);

        //result including the root. Cannot include the prev. val(withRoot) from left and right subree's
        const withRoot = root.val+left[1]+ right[1];

        //result excluding the root. MAX:could be anything out from left and right subtree's (including or excluding from prev result)
        const withoutRoot = Math.max(...left) + Math.max(...right);

        //FINALLY: returning a pair at each node step
        return [withRoot, withoutRoot];
    }

    //ezz    
    return Math.max(...dfs(root));
};