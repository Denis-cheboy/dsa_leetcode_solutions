const mergedList=(list1,list2)=>{
    let result=new ListNode()
    let copy=result

    while(list1 && list2){

        if(list1.val<list2.val){
            copy.next=new ListNode(list1.val)
            list1=list1.next
        }
        else{
            copy.next=new ListNode()
            list2=list2.next
        }

        copy=copy.next
    }

    copy.next=list1 || list2
    
    return result.next
}