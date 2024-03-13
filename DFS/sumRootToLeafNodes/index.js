// Good approach here
const sum=()=>{
   if(root==null) return 00

   function dfs(root,num){
        if(root==null) return null

        num+=root.val

        if(root.left==null && root.right==null){
            return +num
        }

        return dfs(root.left,num)+dfs(root.right,num)

   }

   dfs(root,"")

}


// another way again
var sumNumbers = function(root) {
    if(!root) return null;
    let sum = 0;
    
    function traverse(node, num) {
        num += node.val
        if(!node.left && !node.right) sum += +num;
        if(node.left) traverse(node.left, num)
        if(node.right) traverse(node.right, num);
    }
    traverse(root, '');
    return sum;
};


const res=[[1,2],[1,3]]

