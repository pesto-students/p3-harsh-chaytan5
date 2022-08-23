// Detect loop in linked list

import SinglyLinkedList from "./problem_7_1.js";


// Time complexity : O(n)
// Space complexity : O(1)

const findLoop = (list) => {
    
    if (list.isEmpty || list.head.next === null) return false;

    let slow = list.head;
    let fast = list.head;

    while (fast.next !== null || fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }

    return false;
}

try {
    let a = new SinglyLinkedList();

    a.insert(0, 10)
    a.insert(1, 20)
    a.insert(2, 30)
    a.insert(3, 40)
    a.insert(4, 50)
    a.insert(5, 60)

    a.log()

    // creating a loop in the linked list 
    a.tail.next = a.head.next;

    console.log(findLoop(a));

} catch (e) {
    
}