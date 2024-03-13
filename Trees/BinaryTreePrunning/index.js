const prunning=(root)=>{
    if(root==null) return null
    root.left=pruneTree(root.left)
    root.right=pruneTree(root.right)

    if(root.left===null && root.right===null && root.val==0) return null
    return root
}

// Another way
const pruneTree2=()=>{
    root.right = root.right && pruneTree(root.right);
    root.left = root.left && pruneTree(root.left);
    if(root.val === 0 && !root.right && !root.left)
      return null
    else
      return root;
}

console.log(prunning())