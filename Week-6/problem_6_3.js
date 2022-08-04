// sort array of 0,1 and 2

// solution 1

const sortArray1 = arr => {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 0:
                count0++;
                break;
            case 1:
                count1++;
                break;
            case 2:
                count2++;
                break;
        }
    }
    let i = 0;
    while (count0 > 0) {
        arr[i++] = 0;
        count0--;
    }
    while (count1 > 0) {
        arr[i++] = 1;
        count1--;
    }
    while (count2 > 0) {
        arr[i++] = 2;
        count2--;
    }

    return arr;

}

// solution 2

const sortArray2 = arr => {
    
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    let start = 0;
    let mid = 0;
    let end = arr.length-1;

    while (mid <= end) {
        switch (arr[mid]) {
            case 0:
                swap(arr, start, mid);
                start++;
                mid++;
                console.log(mid);
                break;
            case 1:
                mid++;
                console.log(mid);
                break;
            case 2:
                console.log(mid);
                swap(arr, mid, end);
                end--;
                break;
        }
    }
    return arr;
}


let arr = [0, 2, 1, 2, 0];
let sortedArray1 = sortArray1(arr);
console.log(sortedArray1);

let arr2 = [0, 2, 1, 1, 2, 0, 1, 2];
let sortedArray2 = sortArray2(arr2);
console.log(sortedArray2);