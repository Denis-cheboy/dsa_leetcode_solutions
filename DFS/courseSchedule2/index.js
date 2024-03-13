const schedule=(numCourses,prerequisites)=>{
    let graph={}

    let visited=new Set()

    for(let [crs,pre] of prerequisites){

        if(graph[crs]){
            graph[crs]=[...graph[crs],pre]
        }
        else{
            graph[crs]=[pre]
        }
    }

    
}
console.log(schedule( numCourses = 4, prerequisites = [[0,1],[0,2],[1,3],[1,4],[3,4]]))