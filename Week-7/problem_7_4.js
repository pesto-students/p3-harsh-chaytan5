// Paranthesis Checker

// Implementation of stack from array

class MyStack {
    constructor() {
        this.items = []
        this.top = -1;
        this.maxSize = 20;
    }

    get size() {
        return this.items.length;
    }

    get isEmpty() {
        return this.items.length === 0;
    }

    push(value) {
        if (this.size === this.maxSize) throw 'Stack Overflow';

        this.items.push(value);
        this.top = value;

    }

    pop() {
        let currentSize = this.size;
        if (currentSize === 0) throw 'Stack Underflow';

        this.top = this.items[currentSize - 2];
        let removedItem = this.items.pop();
        return removedItem;

    }

}

// Time complexity : O(n);
// Space complexity : O(n);

function paranthesisChecker(str) {
    const stack = new MyStack();

    let n = str.length;

    for (let i = 0; i < n; i++) {
        let top = stack.top;
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        } else {
            if (stack.isEmpty) return false;

            if ((str[i] === ')' && top === '(') ||
                (str[i] === '}' && top === '{') ||
                (str[i] === ']' && top === '[')) {
                stack.pop();
            } else {
                return false; 
            }
        }
    }
    if (stack.isEmpty) {
        return true;
    } else {
        return false;
    }
}

export default MyStack;

try {
    let string = '{([])}'; // true
    let string2 = '[()]{}{()()}'; // true
    let string3 = '([]' // false

    console.log(paranthesisChecker(string3));


} catch (e) {

}