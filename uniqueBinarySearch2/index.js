

var generateTrees = function(n) {

    function dfs(arr){
        
        if(arr.length===0) return [null]
        let res=[]

        for(let i=0;i<=arr.length-1;i++){
            
            let leftTrees=dfs(arr.slice(0,i))
            let rightTrees=dfs(arr.slice(i+1,arr.length))
            

            for(let l of leftTrees){

                for(let r of rightTrees){

                    let root=new TreeNode(arr[i])

                    root.left=l
                    root.right=r

                    res.push(root)

                }
            }
        }
        return res
    }



    let arr=[]

    for(let i=1;i<=n;i++){
        arr.push(i)
    }


    return dfs(arr)
};



// console.log(generateTrees(3))

