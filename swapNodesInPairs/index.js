const swapPairs=(head)=>{
    if(!head || !head.next) return head 

    let current=head 
    let next=head.next
    let nextToNext=next.next

    current.next=swapPairs(nextToNext)
    return next
}

var swapPairs2 = function(head) {
    
    let result=new ListNode()

    let copy=result

    let arrayResult=[]

    while(head){
        arrayResult.push(head.val)
        head=head.next
    }

    if(arrayResult.length===1){
        return new ListNode(arrayResult[arrayResult.length-1])
    }

    for(let i=0;i<arrayResult.length;i++){

        if(i%2===0 && arrayResult[i+1]!==undefined){
            copy.next=new ListNode(arrayResult[i+1])
            copy=copy.next
            copy.next=new ListNode(arrayResult[i])
            copy=copy.next
        }
        if(i%2===0 && arrayResult[i+1]===undefined){
            copy.next=new ListNode(arrayResult[i])
            copy=copy.next
        }
    }
    return result.next
};
