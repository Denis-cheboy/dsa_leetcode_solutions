var buildTree = function(inorder, postorder) {
    let inorderHash={}

    for(let i=0;i<inorder.length;i++){
        inorderHash[inorder[i]]=i
    }

    function dfs(start,end){
        if(start>end) return null

        let val=postorder.pop()
        let root=new TreeNode(val)

        root.right=dfs(inorderHash[val]+1,end)
        root.left=dfs(start,inorderHash[val]-1)
        
        return root
    }

    return dfs(0,inorder.length-1)
};
// Inefficient one

const buildTree2=(inorder,postorder)=>{

    function build(inorder,postorder){
        if(inorder.length===0) return null

        let val=postorder.pop()

        let mid=inorder.indexOf(val)

        let root=new TreeNode(val)

        root.right=build(inorder.slice(mid+1),postorder)
        root.left=build(inorder.slice(0,mid),postorder)

        return root

    }

    return build(inorder,postorder)
}

// Most efficient way here

const buildTree3=(inorder,postorder)=>{
    let graph=new Map()

    for(let i=0;i<inorder.length;i++){
        graph.set(inorder[i],i)
    }

    function build(start,end){

        if(start>end) return null

        let val=postorder.pop()

        let mid=graph.get(val)

        let root=new TreeNode(val)

        root.right=build(mid+1,end)
        root.left=build(start,mid-1)

        return root

    }

    return build(0,inorder.length-1)
}