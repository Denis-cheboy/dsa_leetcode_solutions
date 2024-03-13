// DP solution with recursion
var pacificAtlantic = function(heights) {
    if (!heights.length) return heights
       let y = heights.length, x = heights[0].length, ans = [],
           dp = new Uint8Array(x * y)
       const dfs = (i, j, w, h) => {
           let ij = i * x + j
           if ((dp[ij] & w) || heights[i][j] < h) return
           dp[ij] += w, h = heights[i][j]
           if (dp[ij] === 3) ans.push([i,j])
           if (i + 1 < y) dfs(i+1, j, w, h)
           if (i > 0) dfs(i-1, j, w, h)
           if (j + 1 < x) dfs(i, j+1, w, h)
           if (j > 0) dfs(i, j-1, w, h)
       }   
       for (let i = 0; i < y; i++) {
           dfs(i, 0, 1, heights[i][0])
           dfs(i, x-1, 2, heights[i][x-1])
       }
       for (let j = 0; j < x; j++) {
           dfs(0, j, 1, heights[0][j])
           dfs(y-1, j, 2, heights[y-1][j])
       }
       return ans
};

// Another way here

const pacific=()=>{

    if (matrix.length === 0) return [] 

    let numRows = matrix.length

    let numCols = matrix[0].length
    
    let atlantic = []

    let pacific = []

    for (let i = 0;i<numRows;i++){
        atlantic.push(new Array(numCols).fill(false))
        pacific.push(new Array(numCols).fill(false))
    }
    
    for (let col=0 ;col<matrix[0].length;col++){
        dfs(matrix, 0, col, Number.MIN_SAFE_INTEGER, pacific)
        dfs(matrix, numRows - 1, col, Number.MIN_SAFE_INTEGER, atlantic)
    }
     
     for (let row = 0;row<matrix.length; row++){
         dfs(matrix, row, 0, Number.MIN_SAFE_INTEGER, pacific)
         dfs(matrix, row, numCols - 1, Number.MIN_SAFE_INTEGER, atlantic)
     }
     
     let res = []
     for (let i=0;i<numRows;i++){
         for (let j=0;j<numCols;j++){
             if (atlantic[i][j] && pacific[i][j]){
                 res.push([i, j])
             }
         }
     }

     
    const dfs = (matrix, i, j, prev, ocean) =>{
        //checkOutOfBounds
        if (i<0 ||
            i > matrix.length -1 ||
            j < 0 ||
            j > matrix[i].length - 1
            ) return
        
        
        if (matrix[i][j] < prev) return
        if (ocean[i][j]) return
        ocean[i][j] = true
        
        dfs(matrix, i+1, j, matrix[i][j], ocean)
        dfs(matrix, i-1, j, matrix[i][j], ocean)
        dfs(matrix, i, j+1, matrix[i][j], ocean)
        dfs(matrix, i, j-1, matrix[i][j], ocean)    
    }
     return res
}
console.log(pacific( [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))