// Next greater element

import MyStack from "./problem_7_4.js";

// Time complexity : O(n) because the inner while loop runs very less times so we can take that as constant and ignore it

// Space complexity : O(n) because we are using stack data structure

const nextGreaterEl = (arr) => {
    let nge = [];
    let stack = new MyStack();
    let n = arr.length;

    for (let i = n - 1; i >= 0; i--){
        
        while (!stack.isEmpty && stack.top <= arr[i]) {
            stack.pop();
        }

        if (i < n) {
            if (!stack.isEmpty) {
                nge[i] = stack.top;
            } else {
                nge[i] = -1;
            }
        }

        stack.push(arr[i]);
    }

    return nge;
}

try {
    let array = [1, 3, 2, 4];

    let ngeArr = nextGreaterEl(array);

    console.log(ngeArr);

} catch (e) {
    console.warn(e);
}