const maxLevel=(root)=>{
 
    let queue=[root]

    let level=0

    let ans
    let maxSum=-Infinity

    while(queue.length>0){

        let len=queue.length
        let sum=0
        level++

        for(let i=0;i<len;i++){
            let curr=queue.shift()
            sum+=curr.val

            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)

        }

        if(maxSum<sum){
            maxSum=sum
            ans=level
        }
    
     
        
    }

   return ans
}

// DFS Approach
var maxLevelSum = function(root) {
    const sums = [-Infinity];

    callDFS(root, 1);

    return sums.indexOf(Math.max(...sums));
      
    function callDFS(node, level) {
        if(!node) return;

        if(sums[level] === undefined) sums.push(node.val);
        
        else sums[level] += node.val;
        
        callDFS(node.left, level+1);
        callDFS(node.right, level+1);
    }
};

console.log(maxLevel())