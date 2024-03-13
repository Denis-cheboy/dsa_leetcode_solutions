const verticalOrderTraversal=(root)=>{
    const map=new Map()

    let queue=[[root,0]]

    while(queue.length>0){

        const cols=new Map()

        const next=[]

        for(let [node,level] of queue){
            if(!cols.has(level)) cols.set(level,[node.val])
            else cols.get(level).push(node.val)

            if(node.left) next.push([node.left,level-1])
            if(node.right) next.push([node.right,level+1])
        }
        
        for(let [x,vals] of cols){
            if(!map.has(x)) map.set(x,[])
            map.get(x).push(...vals.sort((a,b)=>a-b))
        }
        queue=next
    }

    return [...[...map.entries()].sort((a,b)=>a[0]-b[0]).map(x=>x[1])]
}

const verticalOrderTraversal2=()=>{
   
        if (root == null) {
            return [];
        }
        
        const queue = [];
        
        queue.push([root, 0, 0]);
        const list = [];
        while(queue.length > 0) {
            const [node, row, column] = queue.shift();
            
            
            if (node) {
                queue.push([node.left, row + 1, column - 1])
                queue.push([node.right, row + 1, column + 1])
                list.push([node.val, row, column]);
            }
        }
      
      const compare = (a, b) => {
        if (a[2] - b[2] === 0 ) {
          
          if (a[1] - b[1] === 0) {
            return a[0] - b[0];
          }
        }
        
        return a[2] - b[2]
      }
      
       list.sort(compare)
      
      const map = new Map();
      for(let i = 0; i < list.length; i++) {
        const [value, row, column] = list[i]
        
        if (map.has(column)) {
          map.get(column).push(value)
        } else {
          map.set(column, [value]);
        }
      }
      
      return [...map.values()]
}

const verticalOrderTraversal3=()=>{
    const map = {}
    const dfs = (node, x=0, y=0) => {
        if (!node) return
        if (map[x] === undefined) {
            map[x] = {}
        }
        if (map[x][y] === undefined) {
            map[x][y] = []
        }
        map[x][y].push(node.val)
        dfs(node.left, x - 1, y + 1)
        dfs(node.right, x + 1, y + 1)
    }
    dfs(root)
    const result = []
    const x = Object.keys(map).sort((a, b) => a - b)
    for (const i of x) {
        const column = []
        const y = Object.keys(map[i]).sort((a, b) => a - b)
        for (const j of y) {
            column.push(...map[i][j].sort((a, b) => a - b))
        }
        result.push(column)
    }
    return result
}

console.log(verticalOrderTraversal())