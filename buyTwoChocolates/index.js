    var buyChoco = function(prices, money) {
    
        let res=[]
    
        for(let i=0;i<prices.length;i++){
    
            for(let j=i+1;j<prices.length;j++){
    
                let sum=prices[j]+prices[i]
                let diff=money-sum
    
                if(diff<0) continue
    
                res.push(diff)
    
            }
        }
        return res.length>0?Math.max(...res):money
    
    };

const buyChoco2=(prices,money)=>{

    prices.sort((a,b)=>a-b)

    let right=prices.length-1
    let left=0
    let res=[]

    while(left<=right){

        let totalPurchase=prices[left]+prices[right]

        let diff=money-totalPurchase

        if(diff<0){
            right--
        }
        else{
            res.push(diff)
            left++
        }
    }
    
    return res.length>0?Math.max(...res):money
}

console.log(buyChoco2([3,2,3],3))

