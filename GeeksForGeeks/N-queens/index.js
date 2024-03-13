class Solution {
    nQueen(n){
        //code here
        let board=new Array(n).fill().map(()=>new Array(n).fill("."))
        let res=[]
        
        function solve(col){
            
            if(col>=n){

                let temp=[]

                board.forEach((r)=>{
                    for(let i=0;i<r.length;i++){
                       if(r[i]==="Q"){
                        temp.push(i+1)
                       }
                    }
                })

                res.push(temp)
                
                return 
                
            }
            
            for(let row=0;row<n;row++){
                
                if(isValid(row,col)){
                    board[row][col]="Q"
                    solve(col+1)
                    board[row][col]="."
                }
            }
        }
        
        function isValid(row,col){
            let rowDup=row
            let colDup=col
            
            while(col>=0 && row>=0){
                if(board[row][col]==="Q") return false
                col--
                row--
            }
            
            row=rowDup
            col=colDup
            
            while(col>=0){
                if(board[row][col]==="Q") return false
                col--
            }
            
            row=rowDup
            col=colDup
            
            while(row<n && col>=0){
                if(board[row][col]==="Q") return false
                col--
                row++
            }
            
            return true
        }
        
        solve(0)

        return res.sort()
        
        
    }
    
}

const queens=new Solution()

console.log(queens.nQueen(4))