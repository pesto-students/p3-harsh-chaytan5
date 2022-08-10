function kadane(arr) {
    if (!Array.isArray(arr)) {
        throw 'invalid input'
    }


    let globalSum = arr[0];
    let currentSum = arr[0];

    let n = arr.length;

    for (let i = 1; i < n; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);

        if (currentSum > globalSum) {
            globalSum = currentSum;
        }
    }

    return globalSum;


}

try {
    let x1 = kadane([1, 2, 3, 4, -10])
    console.log(x1);

    let x2 = kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    console.log(x2);
} catch (e) {
    console.warn(e);
}