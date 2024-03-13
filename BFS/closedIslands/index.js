const closedIslands=(grid)=>{
    let land=0
    let count=0
    let visited=new Set()

   for(let row=0;row<grid.length;row++){
       for(let col=0;col<grid[0].length;col++){

           if(grid[row][col]===land && isClosed(row,col,visited)){
               count++
           }
       }
   }

   function isClosed(row,col){
       grid[row][col]="#"

       let queue=[[row,col]]

       let isClosed=true

       let directions=[
           [1,0],
           [-1,0],
           [0,1],
           [0,-1]
       ]

       while(queue.length>0){

           const [row,col]=queue.shift()

           for(let [rowDir,colDir] of directions){
               const nextRow=row+rowDir
               const nextCol=col+colDir

               if(
                   nextRow>=grid.length ||
                   nextRow<0 ||
                   nextCol>=grid[0].length ||
                   nextCol<0
               ){
                   isClosed=false
               }
               else if(grid[nextRow][nextCol]===land){
                   grid[nextRow][nextCol]="#"
                   queue.push([nextRow,nextCol])
               }
           }
       }

       return isClosed


   }

   return count
}

// my best way
var closedIsland = function(grid) {
    let count = 0;
  let row = grid.length;
  let column = grid[0].length;
  for(let i = 0; i<grid.length; i++){

      for(let j=0; j<grid[0].length; j++){
          if (grid[i][j] == 0){
              if (helper(i,j))count++;
          }
      }
  }

  function helper(i,j){
      if (i < 0 || j < 0 || i>=row || j>=column) return false;
      
      if (grid[i][j]) return true;
 
      grid[i][j] = true;

      let top = helper(i - 1, j)
      let bottom = helper(i + 1, j)
      let left = helper(i, j-1)
      let right = helper(i, j + 1);

      return top && bottom && left && right;

  }

  console.log(grid)
  return count
};

console.log(closedIsland(grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]))