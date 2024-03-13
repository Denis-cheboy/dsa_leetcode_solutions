const maximumDepth=(root)=>{

    if(root==null || root==undefined) return 0

    return Math.max(maximumDepth(root.left),maximumDepth(root.right))+1

}

// iterative approach
const maximumDepth2=(root)=>{
    let queue=[root]
    let depth=0

    while(queue.length>0){
        depth++
        const len=queue.length

        for(let i=0;i<len;i++){
            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }
        queue.splice(0, len);
    }
    return depth

}

console.log(maximumDepth)