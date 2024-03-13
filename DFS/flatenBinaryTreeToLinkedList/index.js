const flat=(root)=>{
    let head=null

    function preOrderTraversal(root){
 
        if(root.right) preOrderTraversal(root.right)
        if(root.left) preOrderTraversal(root.left)
 
        root.left=null
        root.right=head
        head=root
    }
 
    if(root) preOrderTraversal(root)
 
}
// another way here
var flatten = function(root) {
    let head = null, curr = root
    while (head != root) {
        if (curr.right === head) curr.right = null
        if (curr.left === head) curr.left = null
        if (curr.right) curr = curr.right
        else if (curr.left) curr = curr.left
        else curr.right = head, head = curr, curr = root
    }
};

// Morris traversal
// SC:O(1) TC:O(n^2)
var flatten2 = function(root) {
    let curr = root
    while (curr) {
        if (curr.left) {
            let runner = curr.left
            while (runner.right) runner = runner.right
            runner.right = curr.right, curr.right = curr.left, curr.left = null
        }
        curr = curr.right
    }
};

console.log(flat(root))