// DFS
const binaryTree=(root)=>{
    if(root==null) return []

    let res=[]

    preOrder(root,0)
    return res


    function preOrder(root,h){
        if(root==null) return 

        res[h]=root.val

        preOrder(root.left,h+1)
        preOrder(root.right,h+1)
    }
}

// BFS
var rightSideView = function(root) {
    const result = [];
    const queue = [];
    
    if (root === null) return result;
    
    queue.push(root);
    while(queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let n = queue.shift();
            if (i === size - 1) result.push(n.val);
            if (n.left !== null) queue.push(n.left);
            if (n.right !== null) queue.push(n.right);
        }
    }
    
    return result;
};
console.log(binaryTree())