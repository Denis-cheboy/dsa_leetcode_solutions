// Topological sort, kahns algorithm
const courseSchedule=()=>{
    const order=[]
    const queue=[]

    const graph={}

    const inDegree=Array(numCourses).fill(0)

    for(let requisite of prerequisites){
        const [e,v]=requisite

        if(graph[v]){
            graph[v]=graph[v].push(e)
        }
        else{
            graph[v]=[e]
        }
        // build indegree array
        inDegree[e]++
    }
    
    for(let i=0;i<inDegree.length;i++){
        if(inDegree[i]===0) queue.push(i)
    }

    while(queue.length){
        const v=queue.shift()

        if(graph[v]){
            for(let e of graph[v]){
                inDegree[e]--
                if(inDegree[e]===0) queue.push(e)
            }
        }
        order.push(v)
    }

    return numCourses===order.length
}

var canFinish = function(numCourses, prerequisites) {
   

};

console.log(courseSchedule( numCourses = 2, prerequisites = [[1,0],[2,0]]))