var decodeString = function(s) {

    let stack=[]

    for(let char of s){
        if(char!=="]"){
             stack.push(char)
             continue
        }

        let curr=stack.pop()
        let str=''

        while(curr!=="["){
            str=curr+str
            curr=stack.pop()
        }

        let num=""
        
        curr=stack.pop()

        while(!Number.isNaN(Number(curr))){
            num=curr+num
            curr=stack.pop()
        }
        stack.push(curr)

        stack.push(str.repeat(Number(num)))
    }

    return stack.join("")
};


console.log(decodeString(s = "3[a]2[bc]ef"))