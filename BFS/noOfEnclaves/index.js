const noOfEnclaves=(grid)=>{

    const m=grid.length
    const n=grid[0].length
    const directions=[[-1,0],[0,-1],[1,0],[0,1]]

    const dfs=(row,col)=>{

        grid[row][col]=0

        for(const [rowDir,colDir] of directions){
            const nextRow=row+rowDir
            const nextCol=col+colDir

            if(nextRow>=0 && nextRow<m && nextCol>=0 && nextCol<n && grid[nextRow][nextCol]===1){
                dfs(nextRow,nextCol)
            }
        }

    }

    for(let i=0;i<m;i++){
        if(grid[i][0]===1){
            dfs(i,0)
        }
        if(grid[i][n-1]===1){
            dfs(i,n-1)
        }
    }

    for(let j=0;j<n;j++){
        if(grid[0][j]===1){
            dfs(0,j)
        }
        if(grid[m-1][j]===1){
            dfs(m-1,j)
        }
    }
    let count=0

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===1){
                count++
            }
        }
    }

    return count

}

// Another way 
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const m=grid.length
    const n=grid[0].length
    const rows=[1,-1,0,0]
    const cols=[0,0,1,-1]

    function dfs(row,col){
        if (row<0 ||
            col<0 ||
            row>=m||
            col>=n||
            grid[row][col]==2 ||
            grid[row][col]==0
        ) return
        grid[row][col]=2
        for (let i=0;i<4;i++){
            dfs(row+rows[i],col+cols[i])
        }
    }

    for (let row=0;row<m;row++){
        if (grid[row][0]==1) dfs(row,0)
        if (grid[row][n-1]==1) dfs(row,n-1)
    }

    for (let col=0;col<n;col++){
        if (grid[0][col]==1) dfs(0,col)
        if (grid[m-1][col]==1) dfs(m-1,col)
    }

    let count=0;
    for (let row=0;row<m;row++){
        for (let col=0;col<n;col++){
            if (grid[row][col]==1) count++
            if (grid[row][col]==2) grid[row][col]=1
        }
    }
    
    return count
};

console.log(noOfEnclaves( [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]))