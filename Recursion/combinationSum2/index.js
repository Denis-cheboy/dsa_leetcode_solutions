/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    let res=[]

    candidates.sort((a,b)=>a-b)

    function dfs(candidates,target,index,comb){

        if(target<0) return 

        if(target===0) return res.push(comb)

        for(let i=index;i<candidates.length;i++){

            if(i!=index && candidates[i]===candidates[i-1]) continue

            let remainder=target-candidates[i]

            dfs(candidates,remainder,i+1,[...comb,candidates[i]])
        }


    }

    dfs(candidates,target,0,[])

    return res
}