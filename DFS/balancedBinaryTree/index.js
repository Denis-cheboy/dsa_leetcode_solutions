// one way to do this, my best way TC:O(n)
const balancedTree=(tree)=>{
    if(tree==null) return true
    let res=true
    function dfs(root){

        if(root==null) return 0

        let left=1+dfs(root.left)
        let right=1+dfs(root.right)

        if(Math.abs(left-right)>1){
            res=false
        }
        return Math.max(left,right)
    }

    dfs(root)
    return res
}

// another way again
var isBalanced = function(root) {
    if(root==null) return true

    if(height(root)==-1) return false

    return true

    function height(root){

        if(root==null) return 0

        let leftHeight=height(root.left)

        let rightHeight=height(root.right)

        if(leftHeight==-1 || rightHeight==-1) return -1

        if(Math.abs(leftHeight-rightHeight)>1) return -1

        return Math.max(leftHeight,rightHeight)+1

    }
};

// another way,, readable
var isBalanced2 = function(root) {
    function DFS(node) {
        if (node) {
            const left = 1 + DFS(node.left)
            const right = 1 + DFS(node.right)
            const balSubTree = Math.abs(left - right) <= 1
            
            return balSubTree ? Math.max(left, right) : Infinity
        }
        return node
    }
    
    return DFS(root) !== Infinity
};

// standAlone way

const isBalanced3=(root)=>{

    if(root==null) return true

    function height(node){
        if(node==null) return 0

        return 1+Math.max(height(node.left),height(node.right))

    }

    return Math.abs(height(root.left)-height(root.right))<=1 && isBalanced3(root.left) && isBalanced3(root.right)
}


console.log(balancedTree(tree))