const subArray=(arr,s)=>{
       
    for(let i=0;i<arr.length;i++){
        
        
        let sum=arr[i]

        if(sum===s){
            return [i+1,i+1]
        }
        
        for(let j=i+1;j<arr.length;j++){
            sum+=arr[j]
            if(sum===s){
                return [i+1,j+1]
                
            }
            if(sum>s) break
        }

        }

    
    
}

// sliding window

const subArray2=(arr,s)=>{
    
    let start=0
    let last=0
    let res=[]
    let currentSum=0
    let flag=false
    
    for(let i=0;i<arr.length;i++){
        
        currentSum+=arr[i]
        
        if(currentSum>=s){
            last=i
            
            while(s<currentSum && start<last){
                currentSum-=arr[start]
                start++
                
            }
            if(currentSum===s){
                res=[start+1,last+1]
                flag=true
                break
            }
            
        }
    }
    
    if(!flag){
        return [-1]
    }
    return res
}
console.log(subArray([1,2,3,4,5,6,7,8,9,10],15))