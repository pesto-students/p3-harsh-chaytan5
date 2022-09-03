// Binary Tree Level Order Traversal
// or Breadth First Search

import BST from "./problem_8_1.js";

// Time complexity : o(h) where h is the height of tree
// Space complexity : o(n) 
const levelOrder = (bst) => {
    if (bst === null) return null;

    let current = bst.root;
    let result = [];
    let queue = [current];

    while (queue.length) {
        current = queue.shift();
        result.push(current.value);
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
    }
    return result;
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

    console.log(levelOrder(x));
} catch (e) {
    console.warn(e);
}