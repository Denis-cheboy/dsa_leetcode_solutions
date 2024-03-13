/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    let res=[]

    function dfs(nums,index,path){
        if(index===nums.length){
            res.push(path)
            return
        }

        dfs(nums,index+1,[...path,nums[index]])

        dfs(nums,index+1,path)

    }

    dfs(nums,0,[])

    return res
};

// Another ways

var subsets = function(nums) {

    let res=[]

    function backtrack(nums,index,set){

        if(index>=nums.length){
            res.push([...set])
            return
        }

        set.push(nums[index])

        backtrack(nums,index+1,set)

        set.pop()

        backtrack(nums,index+1,set)
    }

    backtrack(nums,0,[])
    
    return res
};

// itreative approach 
var subsets2 = function(nums) {
    let res = [[]], appendarr= []
    
    for(let num of nums){
        appendarr = []

        for(let entry of res){
            appendarr.push([...entry, num])
        }
        
        res.push(...appendarr)
    }
    
    return res
    
};

// another way 
function subsets(nums) {
	const powerset = [];
	generatePowerset([], 0);

	function generatePowerset(path, index) {
		powerset.push(path);
		for (let i = index; i < nums.length; i++) {
			generatePowerset([...path, nums[i]], i + 1);
		}
	}

	return powerset;
}


console.log(subsets2([1,2,3]))