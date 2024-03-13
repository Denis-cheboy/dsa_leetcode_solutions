/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    const res=[]

    function permute(arr,sum,start){

        if(sum>n) return 

        if(arr.length===k){
            if(sum===n) res.push(arr)
            return 
        }

        for(let i=start;i<10;i++){

            permute([...arr,i],sum+i,i+1)
        }
    }

    permute([],0,1)

    return res

};

// another way

const combinationSum2=(k,n)=>{

    let res=[]

    function recurse(currArr,target,index){

        if(target<0 || currArr.length>k) return 

        if(currArr.length===k) target===0 && res.push([...currArr])

        for(let i=index;i<10;i++){
            currArr.push(i)

            recurse(currArr,target-i,index+1)

            currArr.pop()
        }

    }

    recurse([],n,1)

    return res
}

const combinationSum23=(n,k)=>{

    let res=[]

    function recurse(currArr,n,k,start){

        if(currArr.length>k || currArr.reduce((a,b)=>a+b,0)>n) return

        if(currArr.length===k){

            if(currArr.reduce((a,b)=>a+b,0)===n) res.push([...currArr])

            return
        }

        for(let i=start;i<10;i++){
            currArr.push(i)
            recurse(currArr,n,k,i+1)
            currArr.pop()
        }
    }

    recurse([],n,k,1)

    return res
}

console.log(combinationSum23(7,3))