import SinglyLinkedList from "./problem_7_1.js";

// Rotate Linked list


// Time complexity : O(n)
// Space complexity : 0(1)

function rotateLinkedList(list, k) {
    if (k < 0 || k > list.size) throw 'Invalid k';

    let counter = 0;
    let index = list.size - 1;

    while (counter < k) {
        let removedNode = list.remove(0);
        list.insert(index, removedNode);
        counter++;
    }

    return list;
}

try {
    let linkedList = new SinglyLinkedList();

    linkedList.insert(0, 1)
    linkedList.insert(1, 2)
    linkedList.insert(2, 3)
    linkedList.insert(3, 4)
    linkedList.insert(4, 5)
    linkedList.insert(5, 6)
    linkedList.insert(6, 7)
    linkedList.insert(7, 8)

    linkedList.log()

    let rotated = rotateLinkedList(linkedList, 4);

    rotated.log();

} catch (e) {
    console.warn(e);
}