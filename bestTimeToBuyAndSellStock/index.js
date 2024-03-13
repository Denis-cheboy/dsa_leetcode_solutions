// TC:0(n^2) their is two nested loops running through to the end of the array
var maxProfit = function(prices) {
    let max=0

    for(let i=0;i<prices.length;i++){
        let current=prices[i]
        console.log("current",current)

        for(let j=i+1;j<prices.length;j++){
            let diff=prices[j]-current
            if(diff>0 && diff>max){
                max=diff
            }
        }
    }
    return max
};
// another approach probably the best way with timeComplexity of 0(n)

const maxProfit2=(prices)=>{

    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
}

console.log(maxProfit2([7,1,5,3,6,4]))