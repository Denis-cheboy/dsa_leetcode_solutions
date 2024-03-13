const longestUniquePath=()=>{
    let level=0

    function helper(parent,current){
        if(current===null) return 0

        let left=helper(current.val,current.left)
        let right=helper(current.val,current.right)

        level=Math.max(level,left+right)

        return current.val===parent?Math.max(left,right)+1:0
    }

    if(root!==null) helper(root.val,root)
    
    return level
}


// Another way here

const longestUnivaluePath=(root)=>{
    if (!root) return 0;
    return Math.max(
      longestPassPath(root.left, root.val) + longestPassPath(root.right, root.val),
      longestUnivaluePath(root.left),
      longestUnivaluePath(root.right)
    );

    function longestPassPath(root,val){
        if (!root || root.val !== val) return 0;
        const left = longestPassPath(root.left, val);
        const right = longestPassPath(root.right, val);
        return 1 + Math.max(left, right);
    }
}

console.log(longestUniquePath())