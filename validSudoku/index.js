const validSudoku=(board)=>{
   
    for(let row=0;row<9;row++){

        let rowSet=new Set()
        let colSet=new Set()
        let boxSet=new Set()
        
        for(let col=0;col<9;col++){
 
            let col_traverse=board[col][row]
            let row_traverse=board[row][col]
            let box_traverse= board[3*Math.floor(row/3)+Math.floor(col/3)][3*(row%3)+(col%3)]
 
            if(col_traverse !="."){
                if(colSet.has(col_traverse)) return false
                colSet.add(col_traverse)
            }
            if(row_traverse !="."){
                if(rowSet.has(row_traverse)) return false
                rowSet.add(row_traverse)
            }
            if(box_traverse !="."){
                if(boxSet.has(box_traverse)) return false
                boxSet.add(box_traverse)
            }
        }
    }
    return true
}

const board=
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const answer=validSudoku(board)

console.log(answer)