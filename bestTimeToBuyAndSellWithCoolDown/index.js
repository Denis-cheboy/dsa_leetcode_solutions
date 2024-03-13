const bestTimeToBuy=(prices)=>{
    if(prices.length===1) return 0

    for(let i=0;i<prices.length;i++){

        let current=prices[i]

        for(let j=i+1;j<prices.length;j++){

        }
    }
}

// best way here

const bestTimeToBuy2=(prices)=>{
    if(prices.length===1) return 0

    var buy=Infinity
    var free=0
    var last=0
    var now=0

    prices.forEach(x=>{
        now=Math.max(last,x-buy)
        buy=Math.min(buy,x-free)
        free=last
        last=now
    })
    return now
}

console.log(bestTimeToBuy([1,2,4]))