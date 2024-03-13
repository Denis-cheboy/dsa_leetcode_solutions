
// recursion solution
var uniquePathsWithObstacles = function(obstacleGrid) {

    let rowLength=obstacleGrid.length
    let colLength=obstacleGrid[0].length

    let positionGrid=(rowLength-1)+","+(colLength-1)
    graph={}
    graph[positionGrid]=1

    // Time:0(m*n) space:0(m*n)


    const dfs=(row,col,graph)=>{

        let positionGrid=row+","+col

        if(row===rowLength || col===colLength || obstacleGrid[row][col]===1){
            return 0
        }

        if(positionGrid in graph){
            return graph[positionGrid]
        }

        graph[positionGrid]=dfs(row+1,col,graph) + dfs(row,col+1,graph)

        return graph[positionGrid]

    }
    return dfs(0,0,graph)
    
};

// real dynamic programming here

const uniquePaths3=(obstacleGrid)=>{

    let rowLength=obstacleGrid.length
    let colLength=obstacleGrid[0].length

    let dpArray=Array(rowLength).fill(0)
    dpArray[rowLength-1]=1

    // Time : O(row*col) space:O(ColLength)

    for(let i=rowLength-1;i>=0;i--){
        for(let j=colLength-1;j>=0;j--){

            if(obstacleGrid[i][j]===1){
                dpArray[j]=0
            }
            else if(j+1<colLength){
                dpArray[j]=dpArray[j]+dpArray[j+1]
            }
        }
    }
    return dpArray[0]

}


// console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))
console.log(uniquePaths3([[0,0,0],[0,1,0],[0,0,0]]))
