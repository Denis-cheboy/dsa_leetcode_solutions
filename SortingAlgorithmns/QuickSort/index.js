// const quickSort = (arr) => {
//     function quickSortRecursive(arr, low, high) {
//       if (low < high) {
//         let pIndex = partition(arr, low, high);
//         quickSortRecursive(arr, low, pIndex - 1);
//         quickSortRecursive(arr, pIndex + 1, high);
//       }
//     }
  
//     function partition(arr, low, high) {
//       let pivot = arr[low]; // Choose pivot as the first element
//       let i = low + 1; // Start from the element next to the pivot
//       let j = high;
  
//       while (i <= j) {
//         while (i <= j && arr[i] <= pivot) {
//           i++;
//         }
//         while (arr[j] > pivot) {
//           j--;
//         }
//         if (i <= j) {
//           [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//       }
  
//       // Move the pivot to its correct position
//       [arr[low], arr[j]] = [arr[j], arr[low]];
  
//       return j; // Return the pivot index
//     }
  
//     quickSortRecursive(arr, 0, arr.length - 1);
//     return arr;
//   };
  
  // Example usage
  const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = quickSort(unsortedArray);
  console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
