class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newnode = new Node(value);
        if (!this.head) {
            this.head = newnode;
            this.tail = newnode;
        }
        this.tail.next = newnode;
        this.tail = newnode;
        this.length++;
    }

    reverse() {

        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }


    }
}
const myLinkedList = new LinkedList(10);
console.log('linked list', myLinkedList)


// adding element to linked list
myLinkedList.push(20)
myLinkedList.push(30)
myLinkedList.push(40)
console.log('adding element to linked list', myLinkedList)

//revere an linked list

myLinkedList.reverse()
console.log('After Reversing', myLinkedList)