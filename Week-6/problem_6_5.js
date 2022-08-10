// find pair with a given difference

function findPair(arr, diff) {
    
    arr.sort((a, b) => a - b);

    let i = 0;
    let j = 1;
    let n = arr.length;

    while (i < n && j < n) {
        if (i !== j && arr[j] - arr[i] === diff) {
            return 1;
        }
        else if (arr[j] - arr[i] < diff) {
            j++;
        } else {
            i++;
        }
    }
    return 0;
}

console.log(findPair([5, 10, 3, 2, 50, 80], 78));
console.log(findPair([-10, 20], 30));
console.log((findPair([1,2,3,4,5,6], 10)));