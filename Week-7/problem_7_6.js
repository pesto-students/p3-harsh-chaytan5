// implement a queue using 2 stacks

import MyStack from "./problem_7_4.js";

class QueueFromStacks{
    constructor() {
        this.inbox = new MyStack();
        this.outbox = new MyStack();
    }

    
    enqueue(value) {
        if (this.inbox.size === this.inbox.maxSize) throw 'Queue Overflow';
        this.inbox.push(value);
    }
    
    dequeue() {
        if (this.inbox.size === 0 && this.outbox.size === 0) throw 'Queue Underflow';

        if (this.outbox.isEmpty) {
            while (!this.inbox.isEmpty) {
                let el = this.inbox.pop()
                this.outbox.push(el);
            }
        } 
        let removedEl = this.outbox.pop();
        return removedEl;
    }

    log() {
        console.log(`Inbox: ${this.inbox.items}, Outbox: ${this.outbox.items}`);
    }
    
    get size() {
        return this.inbox.size + this.outbox.size
    }
}

try {
    const q = new QueueFromStacks();
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.enqueue(40);
    q.enqueue(50);
    q.enqueue(60);
    q.enqueue(70);

    q.log()

    console.log(q.dequeue());

    q.log();

    console.log(q.size);

    q.enqueue(80)
    q.enqueue(90)

    q.log()

    console.log(q.size);

} catch (e) {
    console.warn(e);
}