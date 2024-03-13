var Solution = function(nums) {
    this.nums=nums
 };
 
 /**
  * @return {number[]}
  */
 Solution.prototype.reset = function() {
     return this.nums
 };
 
 /**
  * @return {number[]}
  */
 Solution.prototype.shuffle = function() {
     let shuffled=[...this.nums]
 
     let n=shuffled.length
 
     const swap=(arr,i,j)=>{
         let temp=arr[i]
         arr[i]=arr[j]
         arr[j]=temp
     }
 
     // swap elements with randomnes
 
     for(let i=0;i<n;i++){
         swap(shuffled,i,Math.floor(Math.random()*n))
     }
     return shuffled
 };

 const sol=new Solution([1,2,3,4])

 console.log(sol.shuffle())
 console.log(sol.shuffle())