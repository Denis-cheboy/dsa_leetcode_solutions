var permuteUnique = function(nums) {

    if(nums.length===0) return []

    let res=[]

    function dfs(nums,visited,res){

        if(visited.size===nums.length){

            let arr=[]

            for(let i of visited){
                arr.push(nums[i])
            }

            res.push(arr)

            return
        }

        for(let i=0;i<nums.length;i++){
            if(nums[i]===nums[i-1] && !visited.has(i-1)) continue
            if(visited.has(i)) continue

            visited.add(i)

            dfs(nums,visited,res)

            visited.delete(i)
        }
    }

    dfs(nums.sort(),new Set(),res)

    return res

};

var permuteUnique = function(nums) {
    let data = [];
	nums = nums.sort();
	function _permute(curr, remaining) {
		if (!remaining.length) {
			data.push(curr);
			return;
		}
        let uniques = new Set();
		for (let i = 0; i < remaining.length; i++) {
            if(uniques.has(remaining[i])) {
				continue;
			} else {
                uniques.add(remaining[i]);
				curr.push(remaining[i]);
				_permute([...curr], [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
				curr.pop();
			}
		}
	}
	_permute([], nums);
	return data;
};

// sweet way /**

var permuteUnique = function(nums) {
   const sorted = nums.sort((x,y) => x-y), permutations = [];

   const rcr = (arr, permutation) => {
       if (!arr.length) return permutations.push(permutation);

       let prev = -Infinity;
       for (let i = 0; i < arr.length; i++) {
           if (prev === arr[i]) continue;

           newArr = arr.slice(0, i).concat(arr.slice(i+1));
           rcr(newArr, [...permutation, arr[i]]);

           prev = arr[i];
       }
   }
   rcr(nums, []);

   return permutations;
};