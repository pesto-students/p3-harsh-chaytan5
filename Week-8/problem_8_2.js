// validate a binary search tree

import BST from './problem_8_1.js';


// Time complexity : O(n)
// Space complexity : o(1)

function isValidBST(bst) {
    let root = bst.root;
    return checkBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

function checkBST(node, min, max) {
    if (node === null) return true;
    if (node.value >= max || node.value <= min) return false;

    if (checkBST(node.left, min, node.value) && checkBST(node.right, node.value, max)) {
        return true;
    }

    return false;
}


try {
    let x = new BST();
    x.insert(20)
    x.insert(10)
    x.insert(30)
    x.insert(5)
    x.insert(15)
    x.insert(22)
    x.insert(35)
    x.insert(21)
    x.insert(25)
    x.insert(33)
    x.insert(45)

    // console.log(x);

    // console.log(isValidBST(x));
} catch (e) {
    console.warn(e);
}