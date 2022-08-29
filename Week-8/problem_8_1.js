// Maximum depth of a binary tree
// given the root of a binary tree, return its max depth

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class BST {
    constructor() {
        this.root = null;
    }

    get isEmpty() {
        return this.root === null;
    }

    insert(value) {
        if (!Number.isInteger(value)) throw 'Invalid Input'
        let newNode = new Node(value);
        if (this.isEmpty) {
            this.root = newNode;
            return true;
        } else {
            this.#insertAt(newNode, this.root);
            return true;
        }
    }

    #insertAt(newNode, currentNode) {
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                return;
            } else {
                this.#insertAt(newNode, currentNode.left);
            }
        } else if (newNode.value > currentNode.value) {
            if (!currentNode.right) {
                currentNode.right = newNode;
                return;
            } else {
                this.#insertAt(newNode, currentNode.right);
            }
        } else {
            throw 'Node with same value exists';
        }
    }

    delete(value) {

        if (this.isEmpty) return null

        let current = this.root;

        if (value === current.value) {
            this.#helper(current);
        }

        while (current !== null) {
            if (value < current.value) {
                if (current.left !== null && value === current.left.value) {
                    current.left = this.#helper(current.left);
                } else {
                    current = current.left;
                }
            } else {
                if (current.right !== null && value === current.right.value) {
                    current.right = this.#helper(current.right);
                } else {
                    current = current.right;
                }
            }
        }

        return this;
    }

    #helper(currentNode) {
        if (currentNode.left === null) {
            return currentNode.right;
        } else if (currentNode.right === null) {
            return currentNode.left;
        } else {
            let rightChild = currentNode.right;
            let lastRight = this.#findlastRight(currentNode.left)
            lastRight = rightChild;
            return currentNode.left;
        }
    }

    #findlastRight(currentNode) {
        if (currentNode.right === null) {
            return currentNode;
        }

        return this.#findlastRight(currentNode.right);
    }
}

// Time complexity : O(n) where n is the number of nodes
// Space complexity : O(n)
function findDepthRecursive(root) {
    if (root === null) return 0;

    let lh = findDepthRecursive(root.left);
    let rh = findDepthRecursive(root.right);

    return 1 + Math.max(lh, rh);
}

// Time complexity : O(n)
// Space complexity : O(n)
function findDepth(root) {
    let current = root;

    if (current === null) {
        return 0;
    }
    let queue = [current];
    let depth = 0;

    while (queue.length) {
        let size = queue.length;
        depth++;
        for (let i = 0; i < size; i++) {
            current = queue.shift();
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }

    }
    return depth;
}

try {
    let x = new BST();
    x.insert(100);
    x.insert(50)
    x.insert(150)
    x.insert(25)
    x.insert(75)
    x.insert(175)
    x.insert(125)
    x.insert(15)
    x.insert(200)


    // console.log(x);

    // console.log(findDepth(x.root));
    // console.log(findDepthRecursive(x.root));


} catch (e) {
    console.warn(e);
}