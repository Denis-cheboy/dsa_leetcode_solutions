var zigzagLevelOrder = function(root) {
    let res=[]

    const go=(node,level)=>{

        if(node==null) return

        if(res[level]===undefined) res[level]=[]

        if(level%2===0){
            res[level].push(node.val)
        }
        else{
            res[level].unshift(node.val)
        }

        go(node.left,level+1)
        go(node.right,level+1)

    }

    go(root,0)
    return res
};

// BFS
var zigzagLevelOrder2 = function(root) {
    if(!root) return [];
    let queue = [root];
    let output = [];
    let deep = 0;
    while(queue.length > 0){
      const size = queue.length;
      const level = [];
      
      for(let i=0; i< size; i++){
        const node = queue.shift();
        if(deep % 2 == 0) level.push(node.val);
        else level.unshift(node.val);
        
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
      }

      output.push(level)
      
      deep++;

    }
    
    
    return output
    
    
};

// DFS

const zigzagLevelOrder2=(root)=>{

    if(!root) return []

    let res=[]

    dfs(root,0)

    return res

    function dfs(root,level){
        if(!root) return 

        if(res[level]===undefined) res[level]=[]

        if(level%2===0){
            res[level].push(root.val)
        }
        else{
            res[level].unshift(root.val)
        }

        dfs(root.left,level+1)
        dfs(root.right,level+1)
    }
}

// console.log(zigzagTraversal())
