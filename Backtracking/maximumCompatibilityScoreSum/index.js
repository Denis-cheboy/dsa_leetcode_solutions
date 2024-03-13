/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function(students, mentors) {

    let matrix=Array(students.length).fill(null).map(()=>new Array(students.length).fill(0))

    let max=0

    for(let s=0;s<students.length;s++){

        for(let m=0;m<mentors.length;m++){

            matrix[s][m]=calcComp(students[s],mentors[m])

        }
    }

    function calcComp(student,mentor){

        let score=0

        for(let i=0;i<student.length;i++){
            if(student[i]===mentor[i]) score++
        }

        return score
    }


    function dfsBacktrack(mat,set,start,currMax){

        if(start===matrix.length){
            max=Math.max(max,currMax)
            return
        }

        let currMat=mat[start]

        for(let c=0;c<currMat.length;c++){

            if(set.has(c)) continue

            set.add(c)

            currMax+=currMat[c]

            dfsBacktrack(mat,set,start+1,currMax)

            currMax-=currMat[c]

            set.delete(c)

        }
    }

    dfsBacktrack(matrix,new Set(),0,0)

    return max

};

console.log(maxCompatibilitySum([[1,1,0],[1,0,1],[0,0,1]],[[1,0,0],[0,0,1],[1,1,0]]))