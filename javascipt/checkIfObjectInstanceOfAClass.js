const checkIfInstance=(obj,classFunction)=>{

    while(obj!=null){

        if(obj.constructor===classFunction){
            return true
        }

        obj=Object.getPrototypeOf(obj)
    }
    return false
}

console.log(checkIfInstance(5,Number))