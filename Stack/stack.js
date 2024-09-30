class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        // this.stack = [];
        const newNode = new Node(value);
        this.first = newNode;
        this.length = 1;
    }

    push(value) {
        let newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.length++;
            return this;
        }
        newNode.next = this.first;
        this.first = newNode;
        this.length++;
        return this;
    }

    pop() {
        if (!this.first) {
            return null;
        }

        if (this.length === 0) {

            return undefined;
        }

        let temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.length--;
    }
}

let stack = new Stack(0);
console.log(stack);

//Push a node into the stack

stack.push(10);
stack.push(20);
console.log('after pushing an element', stack);

// pop the stack

stack.pop()

console.log('after popping an element', stack);
