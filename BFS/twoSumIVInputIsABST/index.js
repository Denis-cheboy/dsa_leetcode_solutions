const findTarget=(root,k)=>{
    if(!root) return false

    const set=new Set()
    const stack=[root]

    while(stack.length>0){
        const node=stack.pop()
        if(set.has(k-node.val)) return true
        set.add(node.val)

        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
    }
    return false
}

// BFS
var findTarget2= function(root, k) {
    const set = new Set();
    const queue = [root];
    while(queue.length) {
        const curr = queue.shift();
        if(set.has(k - curr.val)) return true;
        set.add(curr.val);
        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);
    }
    return false;
};

console.log(findTarget(root,k))