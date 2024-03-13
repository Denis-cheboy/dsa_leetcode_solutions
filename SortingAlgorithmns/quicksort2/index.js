
const quickSort=(low,high,arr)=>{

    if(low<high){

        let pIndex=partition(low,high,arr)

        quickSort(low,pIndex-1,arr)
        quickSort(pIndex+1,high,arr)

    }

    function partition(low,high,arr){

        let pivot=arr[low]

        let i=low+1
        let j=high


        while(i<=j){

            while(arr[i]<pivot && i<=j){
                i++
            }

            while(arr[j]>pivot){
                j--
            }

            if(i<j){
                [arr[i],arr[j]]=[arr[j],arr[i]]
                i++
                j--
            }
        }

        [arr[low],arr[j]]=[arr[j],arr[low]]

        return j

    }

    return arr
}

// 
// [5,3,2,4,1,6]
// 5-pivot
// i=0+1
// j=arr.length-1
// arr[i]<pivot continue
// arr[j]>pivot continue

let arr=[5,6,2,4,1,3]

console.log(quickSort(0,arr.length-1,arr))