/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

// two pointers
var findClosestElements = function(arr, k, x) {
    
    let leftPointer=0
    let rightPointer=arr.length-1

    while(rightPointer-leftPointer>=k){

        if(Math.abs(arr[leftPointer]-x)<=Math.abs(arr[rightPointer]-x)){
            rightPointer--
        }
        else{
            leftPointer++
        }
    }

    return arr.slice(leftPointer,rightPointer+1)
};

// usinng binary search

var findClosestElements = function(arr, k, x) {
    let lo = 0, hi = arr.length - 1;
    while (lo < hi) {
        const mid = parseInt((lo + hi) / 2);
        x - arr[mid] > arr[mid + k]- x ? lo = mid + 1 : hi = mid;
    }
    return arr.slice(lo, lo + k);
};

// two pointers with stack 
var findClosestElements = function(arr, k, x) {
    let idx = 0;
    while (k < arr.length - idx) {
        const last = arr.pop();
        if (last - x < x - arr[idx]) {
            idx++;
            arr.push(last);
        }
    }
    return arr.slice(idx);
};

// Another crazy way
// javaScript
var findClosestElements = function(arr, k, x) {
    arr.sort((a,b)=>{
        const a1 = Math.abs(a-x), b1 = Math.abs(b-x);
        return a1 == b1 ? a-b : a1-b1;
    });
    const ans = arr.slice(0,k);
    ans.sort((a,b)=>a-b);
    return ans;
};