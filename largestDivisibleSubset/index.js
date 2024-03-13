// my way here(though not right output)
const langestSubset=()=>{
    if(nums.length===1) return nums

    let len=nums.length
    
    const generateSubsets=(nums,index,comb)=>{

        if(index>=len){
           return 
        }

        comb.push(nums[index])

        generateSubsets(nums,index+1,comb)


        if(checkModulus([...comb])){
            
            return [...comb]
        }

        comb.pop()

        generateSubsets(nums,index+1,comb)
    }

    const answer=generateSubsets(nums,0,[])

    function checkModulus(comb){
        let i=0
    
        while(i<comb.length-1){
            if(comb[i]%comb[i+1]!==0 || comb[i+1]%comb[i]!==0){
                return false
            }
            i++
        }
        return true
    }

    return answer

}

// best way here
// the idea is to sort the array in ascending order, and start dp from the last index since the largest value
// is expected to generate the largest subset, 

var largestDivisibleSubset = function(nums) {
   
    let memo={}
 
    nums.sort((a,b)=>a-b)
 
    let output=[]
 
    for(let i=nums.length-1;i>=0;i--){

        let curr=dp(nums,i)
 
        if(curr.length>output.length){
            output=curr
        }
    }
 
    function dp(nums,index){
 
        if(index in memo) return memo[index]
 
        let currSubset=[]
 
        for(let i=index-1;i>=0;i--){
 
            if(nums[index]%nums[i]===0){
                let prevSubset=dp(nums,i)
                
                if(prevSubset.length>currSubset.length){
                    currSubset=prevSubset
                }
            }
        }
        let output=[...currSubset,nums[index]]
        memo[index]=output

        console.log(memo)
 
        return output
    }
    return output
 };
    


 console.log(largestDivisibleSubset([1,2,4,8]))
   

// console.log(langestSubset(nums =  [1,2,3]))