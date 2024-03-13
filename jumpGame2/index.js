const jump=(nums)=>{

    let l=0
    let r=0
    let res=0

    while(r<nums.length-1){

        let furthest=0
        
        for(l;l<=r;l++){
            furthest=Math.max(furthest,l+nums[l])
        }
        
       
        l=r+1
        r=furthest
        res+=1
    }

    return res

}
// another way dp way



// const jumpGame2=(nums)=>{

//     if(nums.length===1) return 0

//     let res=Array(nums.length).fill(0)

//     for(let i=nums.length-2;i>=0;i--){
//         let min=-Infinity

//         for(let j=)
//     }
// }

const jumpGame3=(nums)=>{
    if(nums.length===1) return 0

    let res=Array(nums.length).fill(Infinity)
    res[0]=0

    for(let i=1;i<nums.length;i++){
        console.log("i",i)
        
        for(let j=0;j<i;j++){
            if(nums[j]>=i-j){
                res[i]=Math.min(res[i],res[j]+1)
            }
        }
    }

    return res[nums.length-1]

}

console.log(jumpGame3([2,3,1,1,4]))