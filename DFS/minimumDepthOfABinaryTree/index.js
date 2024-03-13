// i enjoyed this approach soo much
// TC O(n)-we traverse each node in the tree only onces
// SC: O(n)-for the recursive depth stack
const minimumDepth=(root)=>{
    if(root==null) return 0

    function dfs(root){

        if(root==null) return 0

        if(root.left==null) return 1+dfs(root.right)

        if(root.right==null) return 1+dfs(root.left)

        if(root.left !=null && root.right!=null) return 1+Math.min(dfs(root.left),dfs(root.right))


    }

    return dfs(root)
}

// BFS Approach
// DFS would go deep, but BFS has the advantage to look for the shortest path possible before moving
// Some solutions use queue and the array .shift() method, but here, it doesn't matter which 
// nodes we check first when getting the nodes for the next level, so treating it like a stack and popping in the 2nd while loop is constant time, instead of shift's O(n) time.
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    let nodesAtCurrLevel = [root];
    let currLevel = 1;
    
    while (nodesAtCurrLevel.length) {
        const nodesAtNextLevel = [];
        while (nodesAtCurrLevel.length) {
            const node = nodesAtCurrLevel.pop();
            
            if (!node.left && !node.right) {
                return currLevel;
            }
            
            if (node.left) {
                nodesAtNextLevel.push(node.left);
            }
            if (node.right) {
                nodesAtNextLevel.push(node.right);
            }
        }
        
        nodesAtCurrLevel = nodesAtNextLevel;
        currLevel += 1;
    }
};

console.log(minimumDepth())