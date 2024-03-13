    var isValid = function(s) {

        if(s.length%2 !==0){
            return false
        }  

        let stringObject={
            '{':'}',
            '(':')',
            '[':']'
        }

        if(Object.values(stringObject).includes(s[0]) || Object.keys(stringObject).includes(s[s.length-1])){
            return false
        }

        let stack=[]

        for(let i=0;i<s.length;i++){
            if(Object.keys(stringObject).includes(s[i])){
                
                stack.push(s[i])
            }
            else if(stringObject[stack.pop()] !==s[i]){
                return false
            }
            
        }

        return stack.length===0
    }


    

    const answer=isValid('({)}')
    console.log(answer)