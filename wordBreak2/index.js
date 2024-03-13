const wordBreak=(s,wordDict)=>{
    if(wordDict.length===0 || wordDict==null) return []

    let res=[]
    let combinations=[]

    function dfs(s,wordDict,res,combination){
        if(s.length===0){
            console.log([...combination])
            res.push([...combination])
        }

        for(let word of wordDict){
            
            if(s.indexOf(word)===0){
                combination.push(word)

                dfs(s.substring(word.length),wordDict,res,combination)

                combination.pop()
            }
        }
    }
    dfs(s,wordDict,res,combinations)
    const answer=res.map(ans=>ans.join(' '))

    return answer
    }

console.log(wordBreak("pineapplepenapple",["apple","pen","applepen","pine","pineapple"]))