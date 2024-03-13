var sortedListToBST = function(head) {
    
    let curr=head
    let list=[]

    while(curr!=null){
        list.push(curr.val)
        curr=curr.next
    }

    function dfs(list){
        
        if(list.length===0) return null

        let left=0
        let right=list.length-1

        let mid=Math.floor((left+right)/2)

        let root=new TreeNode(list[mid])

        root.left=dfs(list.slice(0,mid))
        root.right=dfs(list.slice(mid+1))

        return root

    }

    return dfs(list)
};

// efficent way without extra memory space 
var sortedListToBST = function(head) {
    let curr = head, count = 0
    while (curr) curr = curr.next, count++
    const treeify = (i, j) => {
        if (j < i) return null
        let mid = i + j >> 1, node = new TreeNode()
        node.left = treeify(i, mid - 1)
        node.val = curr.val, curr = curr.next
        node.right = treeify(mid + 1, j)
        return node
    }
    curr = head
    return treeify(1, count)
};