var convert = function(s, numRows) {
    if(numRows===1){
        return s
    }
    let n=s.length
    let section=Math.ceil(n/(2*numRows-2.0))

    let numCols=section*(numRows-1)


    let matrix=new Array(numRows).fill(0).map(()=>new Array(numCols).fill(''))

    let currRow=0
    let currCol=0
    let currStringIndex=0

    while(currStringIndex<n){
        // mode down

        while(currRow<numRows && currStringIndex<n){
            matrix[currRow][currCol]=s[currStringIndex]
            currRow++
            currStringIndex++
        }
        currRow-=2
        currCol++

        // moviing up and right at the same time

        while(currRow>0 && currCol<numCols && currStringIndex<n){
            matrix[currRow][currCol]=s[currStringIndex]
            currRow--
            currCol++
            currStringIndex++
        }


    }

    let answer=matrix.map(row=>row.join('')).join('')
    return answer.replaceAll('','')


};

convert('paypalishiring',3)
