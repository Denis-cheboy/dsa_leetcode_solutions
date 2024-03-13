const leaders=(arr)=>{

    let max=arr[arr.length-1]
    let res=[]

    for(let i=arr.length-1;i>=0;i--){

        if(arr[i]>=max){
            max=arr[i]
            res.push(max)
        }
    }

    return res.reverse()
}


console.log(leaders([16,17,4,3,5,2]))