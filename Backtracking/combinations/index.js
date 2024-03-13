var combine = function(n, k) {
    
    if(n===0) return []

    let currArray=[]

    for(let i=1;i<=n;i++){
        currArray.push(i)
    }

    let res=[]

    function dfs(n,k,start,combination){
        
        if(combination.length===k){
            res.push([...combination])
            return
        }

        for(let i=start;i<=n;i++){
            combination.push(i)

            dfs(n,k,i+1,combination)

            combination.pop()
        }
    }

    dfs(n,k,1,[])

    return res
};

// iterative approach 

var combine = function(n, k) {
    const result = [];
    generateCombinations(1, n, k, [], result);
    return result;
};

function generateCombinations(start, n, k, combination, result) {
    if (k === 0) {
        result.push([...combination]);
        return;
    }
    for (let i = start; i <= n; ++i) {
        combination.push(i);
        generateCombinations(i + 1, n, k - 1, combination, result);
        combination.pop();
    }
}