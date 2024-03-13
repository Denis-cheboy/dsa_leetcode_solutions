var findBottomLeftValue = function(root) {
    
    if(!root) return null

    let queue=[root]

    let mostLeft=null

    while(queue.length>0){

        let size=queue.length

        let level=[]

        for(let i=0;i<size;i++){

            let curr=queue.shift()

            level.push(curr.val)

            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }

        mostLeft=level.shift()
 
    }

    return mostLeft
};

// Another BFS 
const findBottomLeftValue2=(root)=>{
    const q = [root];
  let res = [];
  while (q.length) {
    const len = q.length;
    //Only record the last row. But all rows can be recorded by 2D array.
    res = [];
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      res.push(node.val);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
  }
  return res[0];
}

// efficient way =>DFS Approach

const findNode=(root)=>{
    if(!root) return null

    let maxDepth=-Infinity

    let res=null

    function dfs(root,currDepth){
        if(!root.left && !root.right){
            if(currDepth>maxDepth){
                res=root.val
                maxDepth=currDepth
            }
        }

        if (root.left)dfs(root.left,currDepth+1)
        if(root.right)dfs(root.right,currDepth+1)
    }

    dfs(root,0)

    return res
}