const validate=(root)=>{

    if(root==null) return true
    
    return validate(root)

    function validate(root,lower,upper){
        if(root==null) return true

        if(lower<root.val && root.val<upper){
            return validate(root.left,lower,root.val) && validate(root.right,root.val,upper)
        }
        else{
            return false
        }
    }
}