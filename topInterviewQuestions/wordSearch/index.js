const findWords = (board, words) => {
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let res = [];
  
    const buildTrie = () => {
      const root = {};
      for (const w of words) {
        let node = root;
        for (const c of w) {
          if (node[c] == null) node[c] = {};
          node = node[c];
        }
        node.word = w;
      }
      return root;
    };
  
    const search = (node, x, y) => {
      if (node.word != null) {
        res.push(node.word);
        node.word = null; // make sure only print one time for each word
      }
  
      if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;
      if (node[board[x][y]] == null) return;
  
      const c = board[x][y];
      board[x][y] = '#'; // Mark visited
      for (const [dx, dy] of dirs) {
        const i = x + dx;
        const j = y + dy;
        search(node[c], i, j);
      }
      board[x][y] = c; // Reset
    };
  
    const root = buildTrie();
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        search(root, i, j);
      }
    }
    return res;
  };

// TC: O(n*m*dfs)4^word.length
  const wordSearch2=(board,target)=>{

    let visited=new Set()
    
    for(let i=0;i<board;i++){

      for(let j=0;j<board[0].length;j++){
          if(dfs(i,j,0)) return true
      }
    }

    function dfs(i,j,index){

      if(board[i][j]!==target[i]) return false

      if(i==target.length) return true


      let colInbound=j>=0 && j<board[0].length
      let rowInbound=i>=0 && i<board.length

      if(!colInbound || !rowInbound)  return false

      let pos=i+","+j

      if(visited.has(pos)) return false

      visited.add(pos)

      let res=dfs(i+1,j,index+1) || dfs(i-1,j,index+1) ||  dfs(i,j-1,index+1) || dfs(i,j+1,index+1)

      visited.delete(pos)

      return res


    }
    return false
  }

  // another way here

  const wordSearch3=(board,word)=>{

    if(word.length===1 && word.charAt(0)===board[0][0]) return true
    
     for(let row=0;row<board.length;row++){

      for(let col=0;col<board[0].length;col++){
         if(board[row][col]===word.charAt(0) && dfs(row,col,0,word)){
            return true
         }
      }
     }
     

     return false

    function dfs(row,col,count,word){
      if(count===word.length) return true

      let colInbound=col>=0 && col<board[0].length

      let rowInbound=row>=0 && row<board.length

      if(!rowInbound || !colInbound) return false

      if(board[row][col]!==word[count])  return false

      board[row][col]="#"

      let res=dfs(row+1,col,count+1,word) || dfs(row-1,col,count+1,word)|| dfs(row,col+1,count+1,word) || dfs(row,col-1,count+1,word)

      board[row][col]=word[count]

      return res
    }

   

  }

  console.log(wordSearch3([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))