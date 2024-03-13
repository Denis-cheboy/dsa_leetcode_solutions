var getRow = function(rowIndex) {
    
    let res=[]

    for(let i=0;i<=rowIndex;i++){
        res[i]=new Array(i+1)

        res[i][0]=1
        res[i][i]=1

        for(let j=1;j<i;j++){
          res[i][j]=res[i-1][j-1]+res[i-1][j]  
        }
    }
    return res[rowIndex]
};