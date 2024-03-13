const kThSmallest=()=>{
    if(root==null) return null


    function dfs(root){
        if(root===null) return []

        let left=dfs(root.left)
        let right=dfs(root.right)

        return [...left,root.val,...right]
    }

    let res=dfs(root)

    return res[k-1]
}

// another best solution 
const kthSmallest = (root, k) => {
    let n = 0;
    let res;
    const inorder = (root) => {
      if (!root) return;
      inorder(root.left);
      if (n++ < k) res = root.val;
      inorder(root.right);
    };
    inorder(root);
    return res;
};

// iterative approach
const iterativeApproach=(root)=>{
    let count=1
    let queue=[root]

    while(root || queue.length>0){

        while(root){
            queue.push(root)
            root=root.left
        }

        let curr=queue.pop()

        if(count===k){
            return curr.val
        } 
        
        count++

        root=curr.right
    }
}


console.log(kThSmallest())