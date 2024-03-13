const sameTree=(p,q)=>{
    if(p==null && q==null) return true
    if(p==null || q==null) return false

    return (p.val==q.val) && sameTree(p.left,q.left) && sameTree(p.right,q.right)
}

// iterative way

const isSameTree=(p,q)=>{

    let stack=[[p,q]]

    while(stack.length>0){
        let [p,q]=stack.pop()
        
        if(!p && !q) continue

        if(!p || !q || p.val !==q.val) return false

        stack.push([p.left,q.left])
        stack.push([p.right,q.right])

    }
    return true

}

console.log(sameTree())