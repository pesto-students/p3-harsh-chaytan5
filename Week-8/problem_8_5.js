// Find the town judge

// Time complexity : O(n)
// Space complexity : O(n)
function findJudge(n, trust) {
    if (!Array.isArray(trust)) throw 'Invalid trust array';
    if (n < 1) return -1;

    let output = new Array(n + 1).fill(0);
    for (let i = 0; i < trust.length; i++) {
        output[trust[i][0]]--;
        output[trust[i][1]]++;
    }

    for (let j = 1; j <= n; j++) {
        if (output[j] === n - 1) return j;
    }
    return -1;
}


try {
    let trust = [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]];
    let result = findJudge(4, trust)
    console.log(result);
} catch (e) {
    console.warn(e);
}