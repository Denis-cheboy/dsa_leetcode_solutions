const ladder=(beginWord,endWord,wordList)=>{

    let fullWord=[beginWord,...wordList]
    
    let graph={}

    for(let word of fullWord){

        let arr=[]

        for(let otherWord of fullWord){

            if(otherWord===word) continue
            let diff=0
            let i=0

            while(i<otherWord.length || i<word.length){
                if(word[i]!==otherWord[i]) diff++
                i++
            }

            if(diff===1) arr.push(otherWord)
        }

        graph[word]=arr
    }
    let queue=[[beginWord,1]]
    let visited=new Set()


    while(queue.length>0){
        let [node,steps]=queue.shift()
   

        if(node===endWord) return steps

        let neighbours=graph[node]|| []


        if(visited.has(node) || neighbours.length===0) continue

        visited.add(node)

        for(let neighb of neighbours){
            console.log("neighb",neighb)
            if(!(visited.has(neighb))){
                queue.push([neighb,steps+1])
            }
        }

    }

    return 0
}

// another way 

const ladder2=(beginWord,endWord,wordList)=>{

    let wordSet=new Set(...wordList)

    let queue=[beginWord]
    let steps=1

    while(queue.length){

        let size=queue.length

        for(let i=0;i<size;i++){

            let curr=queue.shift()

            if(curr===endWord) return steps

            for(let i=0;i<curr.length;i++){

                for(let j=0;j<26;j++){

                    let newWord=curr.slice(0,i)+String.fromCharCode(j+97)+curr.slice(i+1)

                    if(wordSet.has(newWord)){
                        queue.push(newWord)
                        wordSet.delete(newWord)
                    }
                }
            }
        }
        steps++
    }

    return 0

}
console.log(ladder(beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]))