//   splitting array based on input



const splitArray = (arr, n) => {
    res = []
    index = 0;
    while (index < arr.length) {
        res.push(arr.slice(index, index + n))
        index += n
    }
    console.log(res)
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
splitArray(arr, 3)
const arr2 = [1, 2, 3, 4, 5]
splitArray(arr2, 2)