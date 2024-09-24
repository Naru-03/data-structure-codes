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

    shift() {
        if (this.length > 0) {
            for (let i = 0; i < this.length; i++) {
                this.data[i] = this.data[i + 1];
            }

            delete this.data[this.length - 1]
            this.length--
        }
    }

    deleteByIndex(index) {

        if (index >= 0 && index < this.length) {

            for (let i = index; i < this.length - 1; i++) {
                this.data[i] = this.data[i + 1];
            }
            delete this.data[this.length - 1]
            this.length--
        }
    }
}

const newArray = new MyArray();
newArray.push("apple")
newArray.push("banana")
newArray.push("coconut")
newArray.push("mango")
console.log(newArray);



console.log("get", newArray.get(0));
newArray.pop()
console.log("after pop", newArray);

// remove 1st element
newArray.shift();

console.log("after shift", newArray);

//deleteByIndex
newArray.deleteByIndex(0)

console.log("after deleteByIndex", newArray);