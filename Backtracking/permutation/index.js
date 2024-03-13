var permute = function(nums) {
    
    if(nums.length===0) return []

    let res=[]

    function generatePermutations(nums,comb,used){

        if(comb.length===nums.length){
            res.push([...comb])
            return 
        }

        for(let i=0;i<nums.length;i++){
            if(used[i]) continue

            comb.push(nums[i])

            used[i]=true

            generatePermutations(nums,comb,used)

            comb.pop()

            used[i]=false

        }
    }

    let used=new Array(nums.length).fill(false)

    generatePermutations(nums.sort(),[],used)

    return res
};

// another way

const permute2=(nums)=>{

    if(nums.length===0) return []

    function dfs(nums,path){

        if(nums.length===0){
            res.push([...path])
            return 
        }

        for(let i=0;i<nums.length;i++){
            dfs([...nums.slice(0,i),...nums.slice(i+1)],[...path,nums[i]])
        }
    }

    dfs(nums,[])
}

// using dp
var permute3 = function(nums, n = 0) {
    if (n >= nums.length) return [[]];
    const res = [];
    const prevs = permute(nums, n + 1);  // permutations of elements after n
    for (let prev of prevs) {
        for (let i = 0; i <= prev.length; i++) {
            let p = prev.slice(0);
            p.splice(i, 0, nums[n]);  // successively insert element n
            res.push(p);
        }
    }
    return res;
};

console.log(permute())