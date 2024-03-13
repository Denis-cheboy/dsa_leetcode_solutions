// BFS Approach
const mergeTrees = function(root1, root2) {
    if (!root1) return root2
    if (!root2) return root1
    
    const res = root1
    
    const queue = []
    queue.push({v1:res, v2:root2}) 
    
    while (queue.length) {
        const {v1, v2} = queue.shift()
        v1.val += v2.val
        
        if (v1.left && v2.left) queue.push({v1:v1.left, v2:v2.left})
        if (!v1.left && v2.left) v1.left = v2.left
        
        if (v1.right && v2.right) queue.push({v1:v1.right, v2:v2.right})
        if (!v1.right && v2.right) v1.right = v2.right  
    }
    
    return res
     
};

// DFS Approach

const merge=(root1,root2)=>{
    if(!root1 || !root2) return root1 || root2

    const mergedTree=new TreeNode(root1.val+root2.val)

    mergedTree.left=merge(root1.left,root2.left)
    mergedTree.right=merge(root1.right,root2.right)

    return mergedTree
}