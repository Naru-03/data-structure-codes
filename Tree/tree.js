class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;

        while (true) {

            if (newNode.value === temp.value) {
                return undefined;
            }
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                } else {
                    temp = temp.left;
                }
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                } else {
                    temp = temp.right;
                }
            }
        }
    }

    includes(value) {
        if (this.root === null || !this.root) {
            return false;
        }
        if (this.root.value === value) {
            return true;
        }

        let temp = this.root;

        while (temp) {
            if (temp.value > value) {
                temp = temp.left
            }
            else if (temp.value < value) {
                temp = temp.right
            } else {
                return true;
            }
        }


        return false
    }
}
const node = new BinarySearchTree();
console.log(node);

node.insert(10);
node.insert(20);
node.insert(5);
node.insert(15);

console.log(node);

node.includes(15)
console.log(node.includes(5))
// includes method