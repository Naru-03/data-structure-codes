const isValidParathesis = (str) => {
    let stack = [];

    const brackets = {
        "{": "}",
        "[": "]",
        "(": ")"
    }

    for (let char of str) {
        console.log('brackets', brackets[char]);
        if (brackets[char]) {
            stack.push(char);
        } else {
            let top = stack.pop();
            console.log(' top ', top, '  ', brackets[top]);
            if (!top || brackets[top] !== char) {
                return false;
            }

        }
    }

    return stack.length === 0;
}

console.log(isValidParathesis("(){}[]"))  // true
console.log(isValidParathesis("([)]")) // false
console.log(isValidParathesis("()")) // true
console.log(isValidParathesis("(")) // false