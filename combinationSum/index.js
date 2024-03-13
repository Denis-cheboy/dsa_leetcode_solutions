var combinationSum = function(candidates, target) {

    let result=[]

    const dfs=(candidates,target,value)=>{
        

        if(target===0) return result.push(value)
        if(target<0) return 

        for(let i=0; i<candidates.length; i++){
            
            let remainder=target-candidates[i]


            dfs(candidates.slice(i),remainder,[...value,candidates[i]])
        }
      
    }

    dfs(candidates,target,[])

    return result.length>0?result:null   
    
};

// second approach

const combinationSum2=(candidates,target)=>{

    let res=[]

    const dfs=(i,cur,total)=>{
        
        if(total===target){
            res.push([...cur])
            return
        }

        if(i>=candidates.length || total>target) return 

        cur.push(candidates[i])
        dfs(i,cur,total+candidates[i])
        cur.pop()
        dfs(i+1,cur,total)
    }
    dfs(0,[],0)
    return res
}



const candidates=[2,3,6,7]
const target=7



const answer=combinationSum(candidates,target)
// console.log(answer)