const maxArea=(grid)=>{
      
    let visited=new Set()
    let max=0

    for(let row=0;row<grid.length;row++){

        for(let col=0;col<grid[0].length;col++){
            
            if(grid[row][col]===1){
                let size=dfs(row,col,visited)
                max=Math.max(max,size)
            }
        }
    }
    
    function dfs(row,col,visited){
        let colInbound=col>=0 && col<grid[0].length
        let rowInbound=row>=0 && row<grid.length
        
        if(!colInbound || !rowInbound) return 0
        if(grid[row][col]===0) return 0

        let pos=row+","+col
        if(visited.has(pos)) return 0
        visited.add(pos)

        let size=1

        size+=dfs(row+1,col,visited)
        size+=dfs(row-1,col,visited)
        size+=dfs(row,col+1,visited)
        size+=dfs(row,col-1,visited)

        return size
    }

    return max
}

// BFS Approach
/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
    let maxArea = 0;

    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] === 1) {
                maxArea = Math.max(maxArea, getArea(grid, row, col));
            }        
        }
    }
    
    return maxArea;
};

const getArea = (grid, row, col) => {
    let area = 0;
    const rowDir = [0, -1, 0, 1];
    const colDir = [-1, 0, 1, 0];
    const queue = [[row, col]];
    grid[row][col] = 0; // mark visited

    while(queue.length > 0) {
        const curr = queue.pop();
        const currRow = curr[0];
        const currCol = curr[1];
        area += 1;

        for(let dir = 0; dir < 4; dir++) {
            const newRow = currRow + rowDir[dir];
            const newCol = currCol + colDir[dir];
            if(
                newRow >= 0
                && newRow < grid.length
                && newCol >= 0
                && newCol < grid[0].length
                && grid[newRow][newCol] === 1) 
            {
                queue.unshift([newRow, newCol]); // enqueue
                grid[newRow][newCol] = 0; // mark visited
            }
        }
    }
    
    return area;
};

console.log(maxArea(grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))