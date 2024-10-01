function reverseString(str) {

    let stack = [];

    // for (let i = 0; i < str.length; i++) {
    //     stack.push(str[i]);
    // }

    for (let char of str) {
        stack.push(char);
    }

    let reverse = '';

    while (stack.length > 0) {
        reverse += stack.pop();
    }

    return reverse;

}

const reverseStrings = reverseString("Hello World!");

console.log(reverseStrings); // Output: "!dlroW olleH"