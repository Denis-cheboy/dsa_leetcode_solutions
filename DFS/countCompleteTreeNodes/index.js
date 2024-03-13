const countComplete=(root)=>{
    
    function leftDepth(node){
        if(!node) return 0
        return leftDepth(node.left)+1
    }

    function rightDepth(node){
        if(!node) return 0
        return rightDepth(node.right)+1
    }

    function traverse(node){
        let leftLen=leftDepth(node)
        let rightLen=rightDepth(node)

        if(leftLen===rightLen) return Math.pow(2,leftLen)-1

        return traverse(node.left)+traverse(node.right)+ 1

    }
    return traverse(root)
}

console.log(countComplete())