const levelOrder=(root)=>{
    if(root==null) return []

    let queue=[root]
    let res=[]

    while(queue.length>0){
        let len=queue.length
        let level=[]

        for(let i=0;i<len;i++){

            let curr=queue.shift()
            level.push(curr.val)

            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)


        }
        res.push(level)
    }

    return res.reverse()
}

// DFS
const levelOrder2=(root)=>{
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

    return res.reverse()
}

console.log(levelOrder(root))