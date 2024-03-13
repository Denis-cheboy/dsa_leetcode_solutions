
const combinationSum=(nums,target)=>{

    let res=[]

    function dfs(arr,target,comb){

        if(target<0) return 
        if(target===0){
            console.log("returning")
            return res.push(comb)
            
        } 

        for(let i=0;i<arr.length;i++){

            let remainder=target-arr[i]

            dfs(arr.slice(i),remainder,[...comb,arr[i]])
        }
    }

    dfs(nums,target,[])

    return res
}

// Another way backtracking

const combinationSum2=(nums,target)=>{

    let res=[]

    function backtrack(nums,comb,target,index){

        if(index>=nums.length) return 
        if(target<0) return 
        if(target===0) return res.push(comb)

        backtrack(nums,[...comb,nums[index]],target-nums[index],index)
        backtrack(nums,comb,target,index+1)
    }

    backtrack(nums,[],target,0)

    return res
}

// Another way 

const combinationSum3=(nums,target)=>{

    let res=[]

    function dfs(nums,target,comb,index){

        if(target<0) return 

        if(index>=nums.length) return 

        if(target===0){
            res.push([...comb])
            return 
        }

        comb.push(nums[index])
        dfs(nums,target-nums[index],comb,index)
        comb.pop()
        dfs(nums,target,comb,index+1)
    }

    dfs(nums,target,[],0)

    return res
}

console.log(combinationSum2([2,3,5],8))