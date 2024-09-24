const array = ['abc', 'def', 'help', 'demo', 'test']

let result = (allstudent, studentName) => {
    allstudent.forEach(element => {
        if (element.toLowerCase() === studentName.toLowerCase()) {
            console.log('user found', element);
        }
    });
}

result(array, 'test1'); // Output: user found test