const allNodes=(root,target,k)=>{

    let res=[]

    const addParent=(root,parent)=>{
        if(!root) return 

        root.parent=parent

        if(root.left){
            addParent(root.left,root)
        }

        if(root.right){
            addParent(root.right,root)
        }
    }

    addParent(root,null)
    
    let visited=new Set()

    const dfs=(root,distance,res)=>{
        if(!root || visited.has(root)) return 

        if(distance===k){
            res.push(root.val)
            return res
        }

        visited.add(root)

        dfs(root.parent,distance+1,res)
        dfs(root.left,distance+1,res)
        dfs(root.right,distance+1,res)

        return res
    }

    return dfs(target,0,res)

}