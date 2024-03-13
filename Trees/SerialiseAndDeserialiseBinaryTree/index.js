const serialise=(root)=>{

    let data=[]

    function preOrderTraversal(root){

        if(!root){
            data.push("#")
            return
        }

        data.push(root.val)

        preOrderTraversal(root.left)
        preOrderTraversal(root.right)
    }

    if(root) preOrderTraversal(root)

    return data.join(',')
}

const deserialise=(data)=>{

    data=data.split(",")

    let idx=0

    function buildTree(){
        let val=data[idx++]

        if(val==="#") return null

        let node=new TreeNode(+val)

        node.left=buildTree()
        node.right=buildTree()

        return node

    }
    buildTree()
}

// BFS

const serialise2=(root)=>{
    let serialise=[]
    let stack=[]

    if(root==null) return []

    stack.push(root)

    while(stack.length){
        let curr=stack.shift()

        serialise.push(curr?curr.val:null)

        if(curr){
            stack.push(curr.left)
            stack.push(curr.right)
        }
    }

    return serialise
}

const deserialise3=(data)=>{
    if(data[0]===null) return null

    let node=new TreeNode(data.shift())

    let stack=[node]

    while(stack.length>0){

        let node=stack.shift()
        let left=data.shift()
        let right=data.shift()

        node.left=left==null?null:new TreeNode(left)
        node.right=right==null?null:new TreeNode(right)

        if(node.left!=null) stack.push(node.left)
        if(node.right!=null) stack.push(node.right) 
    }
    
    return node
}

deserialise(serialise(root))