// My bruteforce approach
const reverse=(s)=>{
    let left=0
    let right=s.length-1

    while(left<right){

        let elem1=s[left]

        s[left]=s[right]
        
        s[right]=elem1
        

        left++
        right--
    }

    return s

}

// another way, by mirroring the image

var reverseString = function(s) {
    
    let size = s.length;
    
    // reverse string by mirror image
    for(let i = 0 ; i < Math.floor(size/2) ; i++ ){
        [ s[i], s[size-1-i] ] = [ s[size-1-i], s[i] ] ;
    }
    
    return;
};

console.log(reverse(s = ["h","e","l","l","o"]))