const kthElement=(matrix,k)=>{

    let newMatrix=matrix.flat().sort((a,b)=>a-b)

    let left=0
    let right=newMatrix.length-1

    while(left<=right){
        let mid=Math.floor((right+left)/2)
        

        if(mid===(k-1)){
            return newMatrix[mid]
        }
        if(k>mid){
            left=mid+1
        }
        else{
            right=mid-1
        }
    }

}

// another way here
var kthSmallest = function(matrix, k) {
    let lo = matrix[0][0], hi = matrix[matrix.length-1][matrix[0].length-1] + 1; // +1 because we don't want to forget the last number
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo)/2);
        let count = 0;
        for (let i = 0;i<matrix.length;i++) {
            for (let j=0;j<matrix.length;j++) {
                if (matrix[i][j] <= mid) count++;
                else break;
            }
        }
        if (count < k) lo = mid+1;
        else hi = mid;
    }
    return lo
};

console.log(kthElement(matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8))