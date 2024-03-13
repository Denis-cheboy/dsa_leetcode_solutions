const recover=(root)=>{
        if(root==null) return null
    
        let node1,node2
    
        let prev=new TreeNode(-Infinity)
    
        traverse(root)
    
        let temp=node1.val
        node1.val=node2.val
        node2.val=temp
    
        function traverse(node){
            if(!node) return 
    
            traverse(node.left)
    
            if(node.val<prev.val){
                node2=node
                if(!node1) node1=prev
            }
            prev=node
            
            traverse(node.right)
        }
    
    
}

// another way here
var recoverTree = function(root) {
    let prev = null, big = null, small = null;
    let dfs = function(root) {
        if (!root) return;
        dfs(root.left);
        if (prev != null && prev.val > root.val) {
            small = root; // potential smaller number that needs to be swapped
            if (!big) big = prev; // assured bigger number that needs to be swapped
            else return;
        }
        prev = root;
        dfs(root.right);
    }
    
    dfs(root);
    [big.val, small.val] = [small.val, big.val];
};

// iterative solution 
const recoverTree = function (root) {
	const stack = [];
	let node = root,
		prev = null,
		x = null,
		y = null;
	while (stack.length || node) {
		if (node) {
			stack.push(node);
			node = node.left;
			continue;
		}
		node = stack.pop();
		if (prev && prev.val > node.val) {
			y = node;
			if (!x) x = prev;
			else break;
		}
		prev = node;
		node = node.right;
	}
	[x.val, y.val] = [y.val, x.val];
};