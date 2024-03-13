const lowestCommonAncestor=()=>{
    if(!root || root===p || root===q) return root

    let left=lowestCommonAncestor(root.left,p,q)
    let right=lowestCommonAncestor(root.right,p,q)

    return (left && right)?root:(left || right)
}
// another way here
const lowestCommonAncestor1 = (root, p, q) => {
    if (!root || root === p || root === q) return root
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    if (!left) return right  // p and q are in the right subtree
    if (!right) return left  // p and q are in the left subtree
    return root              // p is in one side and q is in the other
};

// iterative approach here
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor2 = function(root, p, q) {
    var pNode;
    var qNode;
    
    // Search for the nodes, and add a parent chain while doing that
    // After finding both, go up each node's parent chain till we find the
    // the same common ancestor for both nodes.
    
    // we will keep track of level, see why later
    root.level = 0;
    let stack = [root];

    // while we have nodes to consider and we haven't found p and q nodes yet
    while (stack.length && !(pNode && qNode)) {
        
        let node = stack.pop();
        
        if (node) {
            
            // check if we found the p node
            if (node.val === p.val) {
                pNode = node;
            }
            
            // check if we found the q node
            if (node.val === q.val) {
                qNode = node;
            }
    
            // consider the children. Set the level and set the node as parent
            if (node.right) {
                node.right.level = node.level + 1;
                node.right.parent = node;
                stack.push(node.right);
            }
            if (node.left) {
                node.left.level = node.level + 1;
                node.left.parent = node;
                stack.push(node.left);
            }
        }
    }
    
    // Now, for both p and q nodes we know the parent chain,
    // we move up the chain until it's the same node. That is the LCA
    // To make sure we move up in the right order, we use the level property added during the dfs
    
    while (pNode.val !== qNode.val) {
        
        if (pNode.level > qNode.level) {
            pNode = pNode.parent;
        } else if (pNode.level < qNode.level) {
            qNode = qNode.parent;
        } else {
            qNode = qNode.parent;
            pNode = pNode.parent;
        }
    }
    
    return pNode;
}

console.log(lowestCommonAncestor())