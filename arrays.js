// custom array

class MyArray {
    data;
    length;
    constructor() {
        this.data = {};
        this.length = 0;
    }

    push(item) {
        this.data[this.length++] = item

    }

    get(index) {
        return this.data[index]
    }

    pop() {
        if (this.length > 0) {
            delete this.data[this.length - 1]
            this.length--
        }
    }
}

const newArray = new MyArray();
newArray.push("apple")
newArray.push("banana")
newArray.push("mango")
console.log(newArray);



console.log("get", newArray.get(0));
newArray.pop()
console.log("after pop", newArray);


