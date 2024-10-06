// DFS pre-order

// Depth first search

//        5
//     3     8
// 1        7  9

// [5.3,1,8,7,9]

// Breadth first search

//    10
// 8     12
//6  9  11   13


//  BFS array =[10,8,12,6,9,11,13]

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

    bfs() {
        let queue = [];
        let data = [];
        let temp = this.root;

        queue.push(temp);

        while (queue.length > 0) {
            temp = queue.shift();
            data.push(temp.value);

            if (temp.left) {
                queue.push(temp.left)
            }
            if (temp.right) {
                queue.push(temp.right)
            }
        }

        return data;
    }

    dfsPreOrder(node = this.root, data = []) {
        if (node === null) {
            return data;
        }

        data.push(node.value);

        if (node.left) {
            this.dfsPreOrder(node.left, data);
        }

        if (node.right) {
            this.dfsPreOrder(node.right, data);
        }
        return data;
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

// bfs method to print breadth first search tree elements 10, 20, 5, 15
console.log(node.bfs())

// DFS pre-order to print depth first search tree elements 10,20,5,15

// DFS pre-order method
console.log('DFS Preorder', node.dfsPreOrder())