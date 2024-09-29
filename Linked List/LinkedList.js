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

    pop() {

        if (!this.head) {
            return undefined
        }

        let temp = this.head;
        let prev = this.head;

        while (temp.next) {
            prev = temp;
            temp = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
    }

    unshift(value) {

        const newnode = new Node(value);

        if (!this.head) {
            this.head = newnode;
            this.tail = newnode;

        }

        newnode.next = this.head;
        this.head = newnode;
        this.length++;
        return this
    }

    shift() {

        if (!this.head) {
            return undefined
        }

        let temp = this.head;
        this.head = temp.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
    }

    getFirstElement() {
        return this.head;
    }

    getLastElement() {
        if (!this.head) {
            return undefined
        }

        let temp = this.head;


        while (temp) {
            if (!temp.next) {
                return temp
            }
            temp = temp.next
        }
    }

    getElementAtIndex(index) {
        let counter = 0;

        let node = this.head;

        while (node) {
            if (counter === index) {
                return node
            }

            counter++;
            node = node.next
        }
        return null
    }

    set(index, value) {

        let data = this.getElementAtIndex(index);
        if (data) {
            data.value = value;
            return true
        }
        return false
    }

    insert(index, value) {

        const node = new Node(value)

        if (index === 0) {
            this.unshift(value)
            return true
        }

        if (index === this.length) {
            this.push(value)
            return true
        }

        let newnode = new Node(value);
        let prev = this.getElementAtIndex(index - 1);
        newnode.next = prev.next;

        prev.next = newnode;
        this.length++;

        return true



    }

    size() {
        let temp = this.head;

        let counter = 0;

        while (temp) {
            counter++;
            temp = temp.next
        }
        return counter
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
const myLinkedList = new LinkedList(1);
console.log('linked list', myLinkedList)


// adding element to linked list
myLinkedList.push(10)
myLinkedList.push(20)
myLinkedList.push(30)
console.log('adding element to linked list', myLinkedList)

//  remove element from linked list  pop method remove last element from list


myLinkedList.pop()

console.log('remove element from linked list', myLinkedList)



// unshift element to linked list (add element at first position)

myLinkedList.unshift(200)
console.log('unshift element to linked list', myLinkedList)


//  shift element from linked list (remove element from first position)

myLinkedList.shift()

console.log('shift element from linked list', myLinkedList)

// get First element from linked list

myLinkedList.getFirstElement()
console.log('first element from linked list', myLinkedList.getFirstElement())

// get last element from linked list

console.log('last element from linked list', myLinkedList.tail)

//get last element using function

myLinkedList.getLastElement()

console.log('last element from linked list', myLinkedList.getLastElement())

// get Element by index from linked list

console.log('element by index', myLinkedList.getElementAtIndex(2))

// set element (modifying data part ) myLinkedList.set(index, value) of linked list
myLinkedList.set(1, 333)

console.log('linked list after set', myLinkedList)

// insert element any location

myLinkedList.insert(0, 444)

console.log('linked list after insert', myLinkedList)

// size of linked list

console.log('linked list size', myLinkedList.length)
console.log('linked list size', myLinkedList.size())

// clear linked list

myLinkedList.clear()
console.log('linked list after clear', myLinkedList)

