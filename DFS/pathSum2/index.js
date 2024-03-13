var pathSum = function(root, sum, res = [], path = []){
    if(root){
        path.push(root.val);
        if(!root.left && !root.right && sum - root.val === 0) res.push([...path]);
        pathSum(root.left, sum - root.val, res, path);
        pathSum(root.right, sum - root.val, res, path);
        path.pop();
    }
    return res;
};
// DFS 
var pathSum = function (root, sum) {
    if (!root) return [];
    const result = [];
    const visited = [];
    function traverse(node) {
        visited.push(node.val);
        if (!node.left && !node.right) {
            const leafSum = [...visited].reduce((a, b) => a+b);
            if (leafSum === sum) result.push([...visited]);
        }
        if (node.left) {
            traverse(node.left);
        }
        if (node.right) {
            traverse(node.right);
        }
        visited.pop();
    }
    traverse(root);
    return result;
};

// My sweet solution here
var pathSum = function(root, targetSum) {
    const ans = [];
  
  const fun = (node, path, sum) => {
    
    if (!node) return;
      
    if (!node.left && !node.right) {
      if (sum === node.val) {
        ans.push([...path, node.val]);
      }
      return;
    }
    
    fun(node.left, [...path, node.val], sum - node.val);
    fun(node.right, [...path, node.val], sum - node.val);
  };
  
  fun(root, [], targetSum);
  
  return ans;
};