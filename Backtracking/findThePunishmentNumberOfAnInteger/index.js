/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {

    let sum=0
 
    for(let i=1;i<=n;i++){
 
        const square=i*i
 
        let isValid=findSumVariations(square,i)
 
        if(isValid.length){
            sum+=square
        }
 
    }
 
 function findSumVariations(num,target){
 
     const numStr = num.toString();
     const variations = [];
         
     backtrack(0, [], 0);
     return variations;
 
     function backtrack(start, path, currSum) {
         if (currSum === target && start === numStr.length) {
         variations.push([...path]);
         return;
         }
 
         for (let i = start + 1; i <= numStr.length; i++) {
             const substring = numStr.slice(start, i);
             const substringSum = parseInt(substring);
             if (substringSum > target) {
                 break;
             }
             path.push(substring);
             backtrack(i, path, currSum + substringSum);
             path.pop();
         }
 
      }
 
  }
 
  return sum
 
     
 };