var numTrees = function(n) {
    let solution=[1,1]
 
    for(let i=2;i<=n;i++){
 
        solution[i]=0
 
        for(let j=1;j<=i;j++){
            solution[i]+=solution[i-j]*solution[j-1]
            console.log(solution)
        }
    }
 
    return solution[n]
 
 };

//  another way

const numTrees2=(n)=>{

    let memo=[]

    return dfs(n,memo)


    function dfs(n,memo){

        if(n===1) return 1

        if(memo[n]) return memo[n]

        let totalTrees=0

        for(let root=1;root<=n;root++){
            let leftTrees=1

            if(root>1) leftTrees=dfs(root-1,memo)

            let rightTrees=1

            if(root<n) rightTrees=dfs(n-root,memo)

            totalTrees+=leftTrees*rightTrees
        }
        memo[n]=totalTrees
        return totalTrees
    }
}

// another way again

const numTrees3=(n)=>{

    let newArray=Array(n+1).fill(1)

    for(let node=2;node<=n;node++){

        let total=0

        for(let root=1;root<=node;root++ ){

            let left=root-1
            let right=node-root
      
            total+=newArray[left]*newArray[right]
        }
        newArray[node]=total

    }
    return newArray[n]
}


 console.log(numTrees3(3))
