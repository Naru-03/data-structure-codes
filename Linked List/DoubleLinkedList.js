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

    pop() {
        if (!this.head) {
            return undefined
        }

        if (this.length === 0) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            return this;
        }


        let temp = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;

        return true;
    }

    unshift(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        newNode.next = this.head;
        this.head.prev = newNode;

        this.head = newNode;
        this.length++;

        return this;
    }

    shift() {

        if (!this.head) {
            return undefined
        }

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        let temp = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
        this.length--;

        return true;
    }
}

let LinkedList = new DoublyLinkedList(1)
console.log(LinkedList)

//Push a node into the linked list

LinkedList.push(2)
LinkedList.push(3)
console.log('After Pushing an Element', LinkedList)

// Pop an Element from LinkedList

LinkedList.pop()
console.log('After Popping an Element', LinkedList)

//unshift a node into the linked list

LinkedList.unshift(33)
console.log('After Unshifting an Element', LinkedList)

// Shift (removing the first element from the linked list)

LinkedList.shift()
console.log('After Shifting an Element', LinkedList)

// reverse the list

LinkedList.reverse()
console.log('After Reversing', LinkedList)