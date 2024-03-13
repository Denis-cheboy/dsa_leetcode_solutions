const maxWidth=(root)=>{
    const minPos=[0]
    let maxWidth=0

    callDfs(root,0,0)

    function callDfs(root,level,pos){
        if(root==null) return 

        if(minPos[level]===undefined) minPos.push(pos)

        const diff=pos-minPos[level]

        maxWidth=Math.max(maxWidth,diff+1)

        callDfs(root.left,level+1,diff*2)
        callDfs(root.right,level+1,diff*2+1)
    }

    return maxWidth
}

// BFS Approach
const widthOfBinaryTree = (root) => {
    const queue = [{ node: root, pos: 0}];
    let maxWidth = 0;
    
    while(queue.length) {
        const levelLength = queue.length;

        let min = Number.MAX_VALUE,
            max = 0;

        for(let i = 0; i < levelLength; i++) {
            const curr = queue.pop();
            min = Math.min(min, curr.pos);
            max = Math.max(max, curr.pos);
            
            if(curr.node.left) queue.unshift({ node: curr.node.left, pos: curr.pos * 2 + 1 });

            if(curr.node.right) queue.unshift({node:curr.node.right, pos: curr.pos * 2 + 2 });
        }
        
        const levelWidth = levelLength === 1 ? 1 : max - min + 1;
        maxWidth = Math.max(maxWidth, levelWidth);
    }
    
    return maxWidth;
};