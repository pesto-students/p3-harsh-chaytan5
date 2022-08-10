// 3 sum closest
// we have to find the sum of 3 nums in the array which is closest to the target number

function threeSumClosest(arr, target) {
    arr.sort((a, b) => a - b);
    let closest = Infinity;
    for (let i = 0; i < arr.length-2; i++){
        let left = i+1;
        let right = arr.length - 1;
        while (left < right) {
            let currentSum = arr[i] + arr[left] + arr[right];
            if (Math.abs(currentSum - target) < Math.abs(closest - target)) {
                closest = currentSum;
            }
            if (currentSum > target) right--;
            else left++;
        }
    }
    return closest;
}

let nums = [-1, 2, 1, -4, 10, 12, 7, 4];
console.log(threeSumClosest(nums,13));