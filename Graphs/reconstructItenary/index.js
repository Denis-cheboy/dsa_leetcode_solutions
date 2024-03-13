const reconstruct=(tickets)=>{
    let graph={}
    let res=[]
    for(let tic of tickets){
        let [from,to]=tic

        if(!(from in graph)) graph[from]=[to]
        else graph[from].push(to)
    }

    for(let loc in graph){
        graph[loc].sort()
    }


    const dfs=(node)=>{

        const des=graph[node] || []

        while(des && des.length>0){
            dfs(des.shift())
        }

        res.push(node)
    }

    dfs('JFK')

    return res.reverse()
}

// Another way

const reconstruct2=(tickets)=>{

    let graph={}
    let res=[]
    
    for(let [from,to] of tickets){
        if(!(from in graph)) graph[from]=[{vertex:to,visited:false}]
        else graph[from].push({vertex:to,visited:false})
    }

    for(let key in graph){
        graph[key].sort()
    }



    function dfs(node){
        node.visited=true

        let neighbours=graph[node.vertex] || []

        if(neighbours.length===0){
            res.push(node.vertex)
            return 
        }

        for(let neigh of neighbours){
            if(!neigh.visited){
                dfs(neigh)
            }
        }

        res.push(node.vertex)

    }

    dfs({vertex:"JFK",visited:false})


    return res.reverse()

}

// Backtracking here, best way 

function reconstruct3(tickets){

    let graph={}

    for(let [from,to] of tickets){
        if(!(from in graph)) graph[from]=[to]
        else graph[from].push(to)
    }

    for(let key in graph){
        graph[key].sort()
    }

    let res=["A"]

    function dfs(source){
        if(tickets.length+1===res.length) return true

        if(!(source in graph)) return false

        let neighbours=graph[source]

        for(let i=0;i<neighbours.length;i++){

            let curr=graph[source].shift()

            res.push(curr)

            if(dfs(curr)){
                return true
            }

            graph[source].push(curr)
            res.pop()
        }

        return false
    }

    dfs("A")

    return res
}

console.log(reconstruct3([["A","B"],["A","C"],["C","A"]]))
console.log(reconstruct2(tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]))