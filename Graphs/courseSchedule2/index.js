// BFS
const courseSchedule=(numCourses,prerequisites)=>{
    let inDegree=new Map()
    let graph={}

    let queue=[]
    let res=[]

    for(let i=0;i<numCourses;i++){
        inDegree.set(i,0)
    }

    for(let pre of prerequisites){
        let [course1,course2]=pre

        if(!(course1 in graph)) graph[course1]=[course2]
        else graph[course1].push(course2)

        inDegree.set(course2,inDegree.get(course2)+1)
    }

    for(let [node,degree] of inDegree.entries()){
        if(degree===0){
            queue.push(node)
        }
    }

    while(queue.length){
        let curr=queue.shift()
        console.log(curr)
        res.push(curr)

        let neighbours=graph[curr] || []

        for(let neighbour of neighbours){
            inDegree.set(neighbour,inDegree.get(neighbour)-1)
            if(inDegree.get(neighbour)===0){
                queue.push(neighbour)
            }
        }
    }

    
    return numCourses===res.length?res.reverse():[]
}

// DFS


console.log(courseSchedule(numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]))