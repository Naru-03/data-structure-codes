class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        let newnNode = new Node(value);
        this.first = newnNode;
        this.last = newnNode;
        this.size = 1;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
            this.size++;
            return this;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.size++;
        return this;

    }

    dequeue() {

        if (this.size === 0) {
            return null;
        }

        let temp = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }

        this.first = this.first.next;
        temp.next = null;
        this.size--;

    }
}

let queue = new Queue(10);
console.log(queue);

// enqueue

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log('enqueue', queue);

// dequeue

queue.dequeue();
console.log('dequeue', queue);