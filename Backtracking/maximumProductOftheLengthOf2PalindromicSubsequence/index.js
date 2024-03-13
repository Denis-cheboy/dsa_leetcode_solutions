/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function(s) {
    

    function isPalindrome(str){

        for(let i=0,j=str.length-1;i<j;i++,j--){

            if(str[i]!==str[j]) return false
        }
        
        return true
    }

    function cb(letterIndex, word1, word2) {
        if (letterIndex > s.length) {
            return isPalindrome(word1) && isPalindrome(word2)
                ? word1.length * word2.length
                : 0;
        }
        
        const char = s[letterIndex];
        const newIndex = letterIndex + 1;
        
        return Math.max(
            cb(newIndex, word1, word2),
            cb(newIndex, `${word1}${char}`, word2),
            cb(newIndex, word1, `${word2}${char}`)
        );
    }

       
    return cb(0, '', '')
};