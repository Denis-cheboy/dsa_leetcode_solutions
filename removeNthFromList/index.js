var removeNthFromEnd = function(head, n) {
    let valueArray=[]
    let res=new ListNode()
    let copy=res
 
    while(head){
      valueArray.push(head.val)
      head=head.next
 
    }
 
    for(let i=0;i<valueArray.length;i++){
        
      if((valueArray.length-i)===n) continue
      copy.next=new ListNode(valueArray[i])
      copy=copy.next
    }
    return res.next
 };