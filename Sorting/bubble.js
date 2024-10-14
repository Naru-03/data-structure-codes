const arr = [2, 6, 5, 1, 3]

bubblesort(arr)

console.log(arr)


function bubblesort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isSwaped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSwaped = true;
            }
        }

        if (!isSwaped) {
            return
        }
    }
}