const winColoring=(root,n,x)=>{
    let temp=root
    let queue=[root]

    while(temp.val!==x){
        temp=queue.shift()
        temp.left?queue.push(temp.left):null
        temp.right?queue.push(temp.right):null
    }

    let getSumOfSubtree=(node)=>{
       let queue=[node]
       let count=0

       while(queue.length>0){
         count++
         let curr=queue.shift()

         curr.left?queue.push(curr.left):null
         curr.right?queue.push(curr.right):null

       }
       return count
    }

    let leftSum=getSumOfSubtree(temp.left)
    let rightSum=getSumOfSubtree(temp.right)

    if(n-(leftSum+rightSum+1)>leftSum+rightSum+1){
        return true
    }

    if(leftSum > n - leftSum || rightSum > n-rightSum) {
        return true;
    }

    return false



}

// another way here
var btreeGameWinningMove = function(root, n, x) {
    
    const halfCount = n / 2;
    const xColoringSubNodes = { left: 0, right: 0 };
    const coloringCounter = (node = root) => {
        if (!node) return 0;
        const left = coloringCounter(node.left);
        const right = coloringCounter(node.right);

        if (node.val === x) {
            xColoringSubNodes.left = left;
            xColoringSubNodes.right = right;
        }
        return left + right + 1;
    };

    coloringCounter();
    const { left, right } = xColoringSubNodes;
    return Math.max(left, right, n - left - right - 1) > halfCount;
};

console.log(winColoring())