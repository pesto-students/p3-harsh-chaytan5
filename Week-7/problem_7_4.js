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


try {
    const stack = new MyStack();
    

} catch (e) {
    
}