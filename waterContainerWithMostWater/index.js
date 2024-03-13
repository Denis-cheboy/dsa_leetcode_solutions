// bruteforce approach
var maxArea = function(height) {
    let maxArea=0
 
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
 
          let width=j-i
 
          maxArea=Math.max(maxArea,Math.min(height[i],height[j])*width)  
 
        }
    }
    return maxArea
 };

//  two pointer approach

const maxArea=()=>{

    let maxArea=0

    let leftPointer=0
    let rightPointer=height.length-1

    while(leftPointer<rightPointer){

        let width=rightPointer-leftPointer 

        maxArea=Math.max(maxArea,Math.min(height[leftPointer],height[rightPointer])*width)

        if(leftPointer<rightPointer){
            leftPointer++
        }
        else{
            rightPointer++
        }
    }
    return maxArea
}