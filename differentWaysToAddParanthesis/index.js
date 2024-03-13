const generateParanthesis=(expression)=>{
    let res = [];
    for (let i = 0; i < expression.length; i++) {
        if (isNaN(expression[i])) {
            let left = generateParanthesis(expression.slice(0, i));
            let right = generateParanthesis(expression.slice(i+1));
            for (let l of left) {
                for (let r of right) {
                    l = Number(l);
                    r = Number(r);
                    
                    if (expression[i]=='+') {
                        res.push(l + r);       
                    } else if (expression[i]=='-') {
                        res.push(l - r);
                    } else {
                        res.push(l * r);
                    }

                }
            }
        }
    }
    
    if (res.length!=0) return res;
    return [expression];
   
}

const generateParanthesis2=(expression)=>{

    if(expression.length===1) return expression[0]
    if(expression.length===0) return 0

    function compute(expression){
        let res=[]

        for(let i=0;i<expression.length;i++){

            if(isNaN(expression[i])){

            }
        }
    }

    compute(expression)

    
}


console.log(generateParanthesis("2-1-1"))