const subset=(nums)=>{
       
    function generateSubset(nums,path){

        res.push([...path])

        for(let i=0;i<nums.length;i++){
            if(i==0 || nums[i]!=nums[i-1]){
                path.push(nums[i])

                generateSubset(nums.slice(i+1),path)
                
                path.pop()
            }
        }
    }

    let res=[]

    nums.sort((a,b)=>a-b)

    generateSubset(nums,[])

    return res
}

// another way

const subset3=(nums)=>{

    if(nums.length===0) return []

    let res=[]

    function generateSubset(nums,path){

        res.push([...path])

        for(let i=0;i<nums.length;i++){

            if(i==0 || nums[i]!==nums[i-1]){
                path.push(nums[i])

                generateSubset(nums.slice(i+1),path)
    
                path.pop()
            }

           
        }
    }

    generateSubset(nums.sort(),[])
}

// Another easier way
var subsetsWithDup = function(nums) {
    nums.sort()
    const powerset = [];
    
    function permute(arr, index) {
        powerset.push(arr)
        
        for(let i = index; i < nums.length; i++) {
            if(i !== index && nums[i] === nums[i-1]) continue;
            permute([...arr, nums[i]], i+1)
        }
    }
    permute([], 0);
    return powerset;
};


console.log(subset2)