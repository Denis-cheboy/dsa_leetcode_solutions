const averageLevel=(root)=>{
    if(root==null) return []

    let res=[]

    dfs(root,0)

    function dfs(root,level){
        if(root==null) return 

        if(res[level]===undefined) res.push(root.val)
        else res[level]+=root.val

        dfs(root.left,level+1)
        dfs(root.right,level+1)
        
    }

    return res
}

// DFS Approach

function averageLevel2(root){
    let sums=[]
    let counts=[]

    doTraversal(root,0,sums,counts)

    let res=[]

    for(let i=0;i<sums.length;i++){
        res.push(sums[i]/counts[i])
    }
    return res

    function doTraversal(root,level,sums,counts){
        if(root==null) return 

        if(sums[level]===undefined) sums.push(root.val)
        else sums[level]+=root.val

        if(counts[level]===undefined) counts[level]=1
        else counts[level]++

        doTraversal(root.left,level+1,sums,counts)
        doTraversal(root.right,level+1,sums,counts)

    }
}