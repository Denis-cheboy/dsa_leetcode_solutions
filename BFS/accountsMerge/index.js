const accountsMerge=(accounts)=>{
    
    let graph={}
    let nameDict={}

    for(let acc of accounts){
        let name=acc[0]

        for(let i=1;i<acc.length;i++){

            if(!graph[acc[i]]) graph[acc[i]]=new Set()

            nameDict[acc[i]]=name

            if(i!=1){
                graph[acc[1]].add(acc[i])
                graph[acc[i]].add(acc[1])
            }
        }
    }

    let res=[]

    let visited=new Set()

    let dfs=function (key){
        visited.add(key)
        let emails=[key]

        graph[key].forEach((e)=>{
            if(!visited.has(e)){
                emails.push(...dfs(e))
            }
        })

        return emails
    }

    for(let key in graph){
        if(!visited.has(key)){
            let temp=dfs(key)
            temp.sort()
            temp.unshift(nameDict[temp[0]])
            res.push(temp)
        }
    }

    return res
}

// DSU
var accountsMerge2 = function (accounts) {
    const parents = {};
    const email2name = {};

    const find = (x) => {
        if (parents[x] !== x) {
            parents[x] = find(parents[x]);
        }

        return parents[x];
    };

    const union = (x, y) => {
        parents[find(x)] = find(y);
    };

    for (const [name, ...emails] of accounts) {
        for (const email of emails) {
            if (!parents[email]) {
                parents[email] = email;
            }

            email2name[email] = name;
            union(email, emails[0]);
        }
    }

    const emails = {};
    for (const email of Object.keys(parents)) {
        const parent = find(email);
        if (parent in emails) {
            emails[parent].push(email);
        } else {
            emails[parent] = [email];
        }
    }

    return Object.entries(emails).map(([email, x]) => [email2name[email], ...x.sort()]);
};

// DSU Another
var accountsMerge3 = function(accounts) {
    const emailToID = new Map();
    const idToEmail = new Map();
    const graph = [...Array(accounts.length)].map((_, i) => i);
    const output = [];
    
    for(let i = 0; i < accounts.length; i++) {
        for(let j = 1; j < accounts[i].length; j++) {
            const currEmail = accounts[i][j]
            if(!emailToID.has(currEmail)) emailToID.set(currEmail, [])
            emailToID.get(currEmail).push(i);
        }
    }
    
    for(let ids of emailToID.values()) {
        for(let i = 1; i < ids.length; i++) {
            union(ids[0], ids[i]);
        }
    }
    
    for(let i = 0; i < accounts.length; i++) {
        const rootID = find(i);
        
        if(!idToEmail.has(rootID)) idToEmail.set(rootID, new Set());
        accounts[i].forEach(email => idToEmail.get(rootID).add(email));
    }
    
    for(let emails of idToEmail.values()) {
        emails = [...emails]
        output.push([emails[0], ...emails.slice(1).sort()])
    }
    
    function find(id) {
        if(graph[id] === id) return id;
        graph[id] = find(graph[id]);
        return graph[id];
    }  
    
    function union(i, j) {
        const rootI = find(i);
        const rootJ = find(j);
        graph[rootJ] = rootI;
    }
    return output;
};

consol3.log(accountsMerge())