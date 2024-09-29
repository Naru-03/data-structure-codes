class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor(value) {

        let node = new Node(value);
        this.head = node;
        this.tail = node;
        this.length = 1;
    }

    push(value) {

        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;

        return this;

    }
}

let LinkedList = new DoublyLinkedList(1)
console.log(LinkedList)

//Push a node into the linked list

LinkedList.push(2)
console.log('After Pushing an Element', LinkedList)