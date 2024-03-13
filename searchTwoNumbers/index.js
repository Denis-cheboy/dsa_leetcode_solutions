const addTwoNumbers=(l1,l2)=>{
    let val1=0;
    let val2=0;
    let carry=0;
    let previousNode=new ListNode()
    while(l1 || l2){
        if(l1){
            val1=l1.val
            l1=l1.next
        }
        if(l2){
            val2=l2.val 
            l2=l2.next
        }
        const sum=val1+val2+carry
        carry=sum>9?1:0
        previousNode.next=new ListNode(sum)

    }
}