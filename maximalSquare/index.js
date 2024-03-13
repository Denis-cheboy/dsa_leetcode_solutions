const maxSquare=(matrix)=>{

    let visited=new Set()

    for(let row=0;row<matrix.length;row++){

        for(let col=0;col<matrix[0].length;col++){
            let res=explore(matrix,row,col,visited)
            console.log(res)
        
        }
    }

    function explore(matrix,row,col,visited){
        let rowInbound=row>=0 && row<matrix.length
        let colInbound=col>=0 && col<matrix[0].length

        if(!rowInbound || !colInbound) return 0

        if(matrix[row][col]==="0") return 0

        let position=row+","+col

        if(visited.has(position)) return 0
        visited.add(position)
        
        let size=1

        size+=explore(matrix,row-1,col,visited)
        size+=explore(matrix,row+1,col,visited)
        size+=explore(matrix,row,col+1,visited)
        size+=explore(matrix,row,col-1,visited)

        return size

    }
}

console.log(maxSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))