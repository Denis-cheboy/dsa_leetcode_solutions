const countSubIsland=(grid1,grid2)=>{
    const R = grid2.length, C = grid2[0].length;
    
    // returns no of cells in grid 2 not covered in grid1
    function noOfNotCoveredDfs(i, j) {
        if (i < 0 || j < 0) return 0;
        if (i >= R || j >= C) return 0;
        if (grid2[i][j] !== 1) return 0;
        
        // mark visited
        grid2[i][j] = 2;
        
        return (grid1[i][j] === 1 ? 0 : 1) + 
            noOfNotCoveredDfs(i - 1, j) + 
            noOfNotCoveredDfs(i + 1, j) + 
            noOfNotCoveredDfs(i, j - 1) + 
            noOfNotCoveredDfs(i, j + 1);
    }
    
    let ans = 0;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (grid2[i][j] === 1) {
                if (noOfNotCoveredDfs(i, j) === 0) {
                    ans++;
                }
            }
        }
    }
    
    return ans;
}

// another way 
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    let count = 0
    let isSubIsland = true
    for (let i = 0; i < grid2.length; i++) {
        for (let j = 0; j < grid2[i].length; j++) {
            if (grid2[i][j] === 1) {
                dfs(i, j)
                if (isSubIsland) count++
                isSubIsland = true
            }
        }
    }
    function dfs(raw, col) {
        if (raw >= grid2.length || raw < 0 || col >= grid2[0].length || col < 0 || grid2[raw][col] == 0) return;
        if (grid2[raw][col] === 1 && grid1[raw][col] === 0) {
            isSubIsland = false
            return
        }
        grid2[raw][col] = 0
        dfs(raw - 1, col)
        dfs(raw + 1, col)
        dfs(raw, col - 1)
        dfs(raw, col + 1)
    }
    return count
};

console.log(countSubIsland())