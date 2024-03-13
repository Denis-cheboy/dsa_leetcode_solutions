const build=(preorder,inorder)=>{

    let p=i=0

    function dfs(stop){
        if(inorder[i]!=stop){
            var root=new TreeNode(preorder[p++])
            root.left=dfs(root.val)
            i++
            root.right=dfs(stop)

            return root
        }

        return null
    }

    return dfs()
}

// Another Way=> My best way manzee

const construct2=(preorder,inorder)=>{

   
    if(preorder.length===0 && inorder.length===0) return null


    function dfs(preorder,inorder){
      if(preorder.length===0 || inorder.length===0) return null
 
      let val=preorder[0]
 
      let newRoot=new TreeNode(val)
 
 
     let mid=inorder.indexOf(val)
 
 
     newRoot.left=dfs(preorder.slice(1,mid+1),inorder.slice(0,mid))
     newRoot.right=dfs(preorder.slice(mid+1),inorder.slice(mid+1))
 
      return newRoot
    }
 
    return dfs(preorder,inorder)
}

console.log(build)