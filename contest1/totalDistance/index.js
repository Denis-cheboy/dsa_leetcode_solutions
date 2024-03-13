const total=(mainTank,additionalTank)=>{
    let totalDist=0
    let addedFuel=0
    
   for(let i=1;i<=mainTank;i++){
      totalDist+=10
      console.log(i)

      if(additionalTank>0){

        if(i%5===0){
            
            additionalTank--
            mainTank++
          }

      }
      
   }
    
    
    return totalDist
}

console.log(total(  mainTank = 5, additionalTank = 10))