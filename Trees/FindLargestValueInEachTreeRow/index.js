const finddLargest=(root)=>{

    if(!root) return []

    let res=[]

    let max=-Infinity

    function dfs(root,index){

        if(!root) return 

        max=Math.max(max,root.val)

        res[index]=max

        dfs(root.left,index+1)
        dfs(root.right,index+1)
    }

    dfs(root,0)

    return res
}

const bfsApproach=(root)=>{
    if(root==null) return []

    let res=[]

    let queue=[root]

    while(queue.length){

        let size=queue.length

        let max=-Infinity

        for(let i=0;i<size;i++){
            let curr=queue.shift()
            max=Math.max(curr.val,max)

            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }

        res.push(max)

    }

    return res
}