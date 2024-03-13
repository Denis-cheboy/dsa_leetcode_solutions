var kthLargestLevelSum = function(root, k) {
    
    let queue=[root]
    let res=[]

    while(queue.length>0){
        let len=queue.length
        let levelSum=0

        for(let i=0;i<len;i++){
           let curr=queue.shift()
           levelSum+=curr.val

           if(root.left){
               queue.push(root.left)
           }
           if(root.right){

               queue.push(root.right)
           }
           
        }
        res.push(levelSum)
    }

    let sortedArray=res.sort((a,b)=>b-a)

    return sortedArray[k-1]===undefined?-1:sortedArray[k-1]
    
};