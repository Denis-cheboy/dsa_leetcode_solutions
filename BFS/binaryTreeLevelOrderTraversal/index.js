const levelOrder=(root)=>{
    if(root==null) return []

    let res=[]

    dfs(root,0)

    function dfs(root,level){
        if(root==null) return 

        if(res[level]===undefined) res[level]=[root.val]
        else res[level]=[...res[level],root.val]

        dfs(root.left,level+1)
        dfs(root.right,level+1)
    }

    return res
}

// BFS Approach
const levelOrder2=()=>{
     
    let res=[]

    let queue=[root]

    while(queue.length>0){
        let len=queue.length
        let level=[]

        for(let i=0;i<len;i++){
          let curr=queue.shift()
          
          if(curr){

            level.push(curr.val)

             if(curr.left) queue.push(curr.left)
             if(curr.right) queue.push(curr.right)

          }

         

        }
        if(level.length>0){
          res.push(level)
        }

    }

    return res
}

console.log(levelOrder())