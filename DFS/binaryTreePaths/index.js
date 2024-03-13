const paths=(root)=>{
    if(root==null) return []

    return dfs(root)

    function dfs(root){

      if(root==null) return []

      if(root.left==null && root.right==null){
         return [`${root.val}`]
      }
      
      let left=dfs(root.left).map(x=>root.val+"->"+x)
      let right=dfs(root.right).map(x=>root.val+"->"+x)

      return [...left,...right]
      
    }
}

// another way again
var binaryTreePaths = function(root) {
    let paths = [];
    
    function dfsTraversal(root, cur) {
        if (!root) return;
        if (!root.left && !root.right) {
            paths.push(cur + root.val);
            return;
        }
        dfsTraversal(root.left, cur + root.val + "->");
        dfsTraversal(root.right, cur + root.val + "->");
    }
    
    dfsTraversal(root, "");
    return paths;
    // Time Complexity: O(N), we always visit all nodes
    // Space Complexity: O(H) or O(N), height can be at most N (in case of a skewed tree)
};

console.log(paths)