// Reverse a linked list


// First we have to create a linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.maxSize = 10;
    }

    get isEmpty() {
        return this.size === 0;
    }

    insert(index, value) {
        if (this.size === this.maxSize) throw 'List Overflow';
        if (!Number.isInteger(index)) throw 'Invalid Index';
        if (index < 0) throw 'Index too low';
        if (index > this.size) throw 'Index too high';

        let newNode = new Node(value);

        // inserting before head : unshift
        if (index === 0) {
            if (this.isEmpty) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.size++;
            return true;
        }

        // inserting at the end : push
        if (index === this.size) {
            if (this.isEmpty) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.size++;
            return true;
        }

        let current = this.head;
        let prevNode;
        let counter = 0;
        while (counter !== index) {
            prevNode = current;
            current = current.next;
            counter++;
        }

        prevNode.next = newNode;
        newNode.next = current;

        this.size++;
        return true;


    }

    remove(index) {
        if (this.isEmpty) throw 'List Underflow';
        if (!Number.isInteger(index)) throw 'Invalid Index';
        if (index < 0) throw 'Index too low';
        if (index >= this.size) throw 'Index too high';


        // remove the first item in the list: shift
        if (index === 0) {
            let removedNode = this.head;
            this.head = removedNode.next;
            this.size--;

            if (this.isEmpty) {
                this.head = null;
                this.tail = null;
            }
            return removedNode.value;
        }

        // remove the last item in the list: pop
        if (index === this.size-1) {
            
            let current = this.head;
            let newTail = current;
            
            while (current.next) {
                newTail = current;
                current = current.next;
            }

            this.tail = newTail;
            this.tail.next = null;
            this.size--;

            if (this.isEmpty) {
                this.head = null;
                this.tail = null;
            }
            return current.value;
        }

        let current = this.head;
        let prevNode = current;
        let counter = 0;
        while (counter !== index) {
            prevNode = current;
            current = current.next;
            counter++;
        }
        
        prevNode.next = current.next;
        current.next = null;
        this.size--

        return current.value;

    }

    log() {
        if (this.isEmpty) throw '---Empty---';

        let current = this.head;
        let aux = [];

        while (current) {
            aux.push(current.value);
            current = current.next;
        }

        console.log(aux.join(' -> '));

    }

    // Time complexity : O(n)
    // Space complexity : o(1)
    
    reverse() {
        if (this.size <= 1) return this;

        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;

        // swap head and tail
        [[this.head], [this.tail]] = [[this.tail], [this.head]];

        while (currentNode !== null) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        this.log();
    }
}

try {
    let a = new SinglyLinkedList();
    a.insert(0, 10)
    a.insert(1, 20)
    a.insert(2, 30)
    a.insert(0, 40)
    a.insert(4, 50)
    a.insert(5,60)

    a.log()
    console.log(a.size);

    a.remove(0);
    a.log();
    
    // a.remove(3)
    // a.log();

    // a.remove(2);
    // a.log()

    a.reverse()
} catch (e) {
    console.warn(e);
}

export default SinglyLinkedList;