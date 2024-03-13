const createCounter=function(n){
    return function(){
        return n++
    }

}
const counter=createCounter(2)

counter()
counter()
counter()
console.log(counter())