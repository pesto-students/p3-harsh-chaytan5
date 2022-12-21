// All paths from source to target

// Time complexity : O(n^2);
// Space complexity : o(n);
function findPath(graph) {
    let ans = [];
    let path = [];
    let n = graph.length - 1;

    (function dfs(current) {
        path.push(current);
        if (current === n) {
            ans.push([...path]);
        } else {
            for (let neighbour of graph[current]) {
                dfs(neighbour);
            }
        }
        path.pop();
    })(0)

    return ans;
}


let graph = [[1, 2], [3], [3], []];
let g2 = [[4, 3, 1], [3, 2, 4], [3], [4], []];
console.log(findPath(graph));
console.log(findPath(g2));