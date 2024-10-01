class HashTable {

    constructor(size = 5) {
        this.keyMap = new Array(size);
    }

    hashFunction(key) {
        let sum = 0;

        const prime_number = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const charCode = key.charCodeAt(0) - 96;
            sum = (sum * prime_number + charCode) % this.keyMap.length;
        }

        return sum;
    }


    set(key, value) {
        const index = this.hashFunction(key);
        console.log(index, value);
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }

        this.keyMap[index].push([key, value]);
        return this
    }

    get(key) {
        const index = this.hashFunction(key);
        console.log(index);

        if (!this.keyMap[index]) {
            return undefined
        }

        this.keyMap[index]
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                return this.keyMap[index][i][1]
            }
        }
    }

    getAllKeys() {
        let keys = []

        for (let i = 0; i < this.keyMap.length;) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }

        return keys
    }

    getAllValues() {
        let values = []

        for (let i = 0; i < this.keyMap.length;) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1])
                }
            }
        }

        return values
    }
}

const hash = new HashTable();
// hash.set("John", "1234567895");

console.log(hash.set("John", "1234567895"))

// get value from 



console.log(hash.get("John"))
console.log('data keys', hash.getAllKeys())
console.log('data values', hash.getAllKeys())