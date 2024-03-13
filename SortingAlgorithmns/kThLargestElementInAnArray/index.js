var findKthLargest = function(nums, k) {
    
    function quickSort(arr,low,high){

        if(low<high){

            let pIndex=partition(arr,low,high)

            quickSort(arr,low,pIndex-1)
            quickSort(arr,pIndex+1,high)
        }

    }

    function partition(arr,low,high){

        let pivot=arr[low]
        let i=low+1
        let j=high

        while(i<=j){

            while(arr[i]<=pivot && i<=j){
                i++
            }
            while(arr[j]>pivot){
                j--
            }

            if(i<=j){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }

        [arr[low],arr[j]]=[arr[j],arr[low]]

        return j

    }

    quickSort(nums,0,nums.length-1)

    return nums[nums.length-k]
};