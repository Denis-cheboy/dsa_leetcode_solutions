var edgeScore = function(edges) {
    const track = {};
    edges.forEach((j, i) => track[j] = j in track ? track[j] + i : i);
    let maxi = -Infinity;
    let res = null;
    Object.entries(track).forEach(([node, val]) => {
        if (val > maxi) {
            maxi = val;
            res = node;
        } else if (val === maxi) res = Math.min(res, node)
    });
    return res;
};