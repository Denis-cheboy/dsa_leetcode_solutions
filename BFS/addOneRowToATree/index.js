var addOneRow = function(root, val, depth) {
    if(d===1) return new TreeNode(val,root,null)

    if(d===2){
        root.left=new TreeNode(val,root.left,null)
        root.right=new TreeNode(val,null,root.right)

    }
    else{
        if(root.left) addOneRow(root.left,val,depth-1)
        if(root.right) addOneRow(root.right,val,depth-1)
    }
    return root
};

// BFS Approach

var addOneRow = function(root, val, depth) {
    if(depth === 1){
        let newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }
    let queue = [root];
    let level = 0;
    while(queue.length !== 0){
        level += 1
        let numNodes = queue.length;
        for(let i = 0; i < numNodes; i++){
            let node = queue.shift();
             if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            if(level === depth - 1){
                let newLeft = new TreeNode(val);
                let newRight = new TreeNode(val);
                newLeft.left = node.left;
                newRight.right = node.right;
                node.left = newLeft;
                node.right = newRight;
            }
        }
    }
    return root;
};