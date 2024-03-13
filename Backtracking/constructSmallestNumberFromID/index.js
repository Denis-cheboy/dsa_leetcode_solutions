/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    let ans=[]

    let stack=[]

    for(let i=0;i<=pattern.length;i++){
        stack.push(i+1)

        if(pattern[i]==="I" || i===pattern.length){
            ans.push(...stack.reverse())
            stack=[]
        }

    }

    console.log(ans)

    return ans.join('')
};

// Another way 
let p, res, n;
const smallestNumber = (pattern) => {
    p = pattern;
    n = p.length;
    res = '';
    dfs([]);
    return res;
};

const dfs = (cur) => {
    if (cur.length > n + 1) return;
    if (cur.length == n + 1) { // valid answer
        let t = cur.join("")
        if (res.length == 0) {
            res = t;
        } else {
            if (t < res) res = t; // get lexicographically smallest
        }
    }
    for (let i = '1'; i <= '9'; i++) { // build
        cur.push(i);
        if (ok(cur)) dfs(cur);
        cur.pop();
    }
};

const ok = (a) => { // check if current built string is valid
    let u = new Set(a);
    if (u.size != a.length) return false; // each digit can be used once, no duplicate
    for (let i = 1; i < a.length; i++) {
        let mark = a[i] > a[i - 1] ? 'I' : 'D';
        if (mark != p[i - 1]) return false; // should meet pattern condition
    }
    return true;
};