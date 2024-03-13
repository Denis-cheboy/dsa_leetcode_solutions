// TC: O(n) SC:O(n)
const combinationSum=(nums,target)=>{

  const helper=(nums,target,memo={})=>{
    if(target in memo) return memo[target]
    if(target===0) return 1

    let size=0

    for(let num of nums){

        let remainder=target-num

        if(remainder>=0){
            size+=helper(nums,remainder,memo)
        }
    }
    memo[target]=size

    return size

  }

  return helper(nums,target)

}

// Dp solution need to understand better

const combinationSum2=(nums,target)=>{

    const table=Array(target+1).fill(0)

    table[0]=1

    for(let i=1;i<=target;i++){

        for(let num of nums){
            
            if(num<=i){
                table[i] += table[i-num]
            }
        }
    }
    console.log(table)

    return table[target]

}

console.log(combinationSum2(nums = [1,2,3], target = 4))