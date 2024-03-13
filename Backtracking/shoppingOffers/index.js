var shoppingOffers = function(price, special, needs) {
    const backtrack = (price , needs , offers , ans) => {

        let key = '' 

        for(let need of needs) key += `_${need}`;

        if(ans.has(key)) return ans.get(key);

        let cost = 0 ; 
        
        for(let i=0;i<price.length;i++) cost+= (price[i]*needs[i] ); 
    
        for(let offer of offers) {

            let temp = Array.from(needs) , valid = true ;

            for(let i=0;i<temp.length;i++){
                temp[i]-=offer[i];
                if(temp[i]<0) valid = false ; 
            }

            if(valid) cost = Math.min(cost , offer[offer.length-1] + backtrack(price , temp , offers , ans));
        }

        ans.set(key,cost); 

        return cost ; 
    }
    
    let ans=new Map()
    
    return backtrack(price,needs,special,ans)
        
    };