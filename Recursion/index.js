const arr=[1,2,3,4]

let len=arr.length-1

function printUser(i){
    
  if(i>=(len/2)) return 

  [arr[i],arr[len-i]]=[arr[len-i],arr[i]]

  printUser(i+1)
 
}


let str="eyyeee"

function isPalindrome(i){
    if(i>=(str.length/2)) return true
    if(str[i]!==str[str.length-1-i] ) return false
    return isPalindrome(i+1)
}

// console.log(isPalindrome(0))


function fb(n){
    if(n<=2) return 1

    return fb(n-1)+fb(n-2)
}

console.log(fb(4))

// console.log(arr)