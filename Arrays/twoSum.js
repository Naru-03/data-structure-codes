// list of number
// target number
// find number indexes whose sum is target number

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 15;

const findSumIndexes = (numbers, target) => {

    for (let i = 0; i < numbers.length; i++) {

        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j]; // return array of indexes where sum is target number
            }
        }
    }

    return []; // return empty array if no sum is found within the given array
}

console.log(findSumIndexes(numbers, target)); // [0, 3, 4]