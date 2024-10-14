// const arr = [3, 27, 38, 43]

// const arr2 = [9, 10, 17, 82]
// merge(arr, arr2)

// console.log(merge(arr, arr2))


arr = [3, 27, 38, 43, 5, 100]

console.log(mergeSort(arr))

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;


    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    result.push(...left.slice(i))
    result.push(...right.slice(j))

    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}