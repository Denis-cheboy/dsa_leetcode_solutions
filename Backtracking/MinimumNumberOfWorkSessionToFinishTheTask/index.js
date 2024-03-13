/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {

    let min=Infinity

    let sessions=[]

    function backtrack(i){

        if(sessions.length>=min) return 

        if(i===tasks.length){
            min=Math.min(min,sessions.length)
            return
        }

        for(let j=0;j<sessions.length;j++){
            if(sessions[j]+tasks[i]<=sessionTime){
                sessions[j]+=tasks[i]

                backtrack(i+1)
                sessions[j]-=tasks[i]
            }
            
        }

        sessions.push(tasks[i])
        backtrack(i+1)
        sessions.pop()
    }

    backtrack(0)

    return min
   
};

console.log(minSessions([3,1,3,1,1],8))