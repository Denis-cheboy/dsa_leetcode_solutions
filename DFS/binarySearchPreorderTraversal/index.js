const preOrderTraverse=(root)=>{

    if(root==null) return []

    let left=preOrderTraverse(root.left)
    let right=preOrderTraverse(root.right)

    return [root.val,...left,...right]
}

// iteratively using queue

// Iterative DFS Solution
var preorderTraversal = function(root) {
    if (!root) return [];

    let stack = [], res = [];

    stack.push(root);

    while (stack.length) {
        let node = stack.pop();

        res.push(node.val);

        if (node.right) stack.push(node.right);
        
        if (node.left) stack.push(node.left);
    }
    return res;
	// Time Complexity: O(n)
    // Space Complexity: O(n)
};