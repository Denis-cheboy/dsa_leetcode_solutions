// DFS Approach
const invert=(root)=>{

    if(root==null){
        return root
    }

    invert(root.left)
    invert(root.right)

    // swapping here
    let curr=root.left
    root.left=-root.right
    root.right=curr

    return root
}
// Iterative approach
// BFS

const invert2=(root)=>{
    
    if(root==null) return root

    let queue=[root]

    while(queue.length>0){

        let curr=queue.shift()

        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
        // swapping here

        let temp=curr.left
        curr.left=curr.right
        curr.right=temp

    }
    return root
}

// Recursion
function invertTree(root) {
    if (root == null) return root;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
  }
  
  // DFS
  function invertTree(root) {
    const stack = [root];
  
    while (stack.length) {
      const n = stack.pop();
      if (n != null) {
        [n.left, n.right] = [n.right, n.left];
        stack.push(n.left, n.right);
      }
    }
  
    return root;
  }
  
  // BFS
  function invertTree(root) {
    const queue = [root];
  
    while (queue.length) {
      const n = queue.shift();
      if (n != null) {
        [n.left, n.right] = [n.right, n.left];
        queue.push(n.left, n.right);
      }
    }
  
    return root;
  }