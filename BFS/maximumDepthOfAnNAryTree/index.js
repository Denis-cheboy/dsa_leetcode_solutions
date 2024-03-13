const maxDepth=()=>{
    if(!root) return 0

    let max=0

    for(let child of root.children){
        max=Math.max(max,maxDepth(child))
    }
    return max+1
}


var maxDepth2 = function(root) {
    if(!root) return 0;
    let max = -1;
    
    const helper = (node, depth) => {
        if(depth > max) max = depth;
        for(let c of node.children){
            helper(c, depth + 1);
        }
    }
    
    helper(root, 1)
    return max;
};
// BFS Approach
const bfs=(root)=>{
    let depth=1

    const queue = [{ node: root, level: 1 }]

    while (queue.length) {
        const { node, level } = queue.shift()

        if (level > depth) depth = level

        if (node.children.length) {
            node.children.forEach(vertex => queue.push({
                node: vertex,
                level: level + 1
            }))
        }
    }
    
    return depth
}

console.log(maxDepth())