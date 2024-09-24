const data = 'hello world';
console.log(data.toLowerCase().split(' '))
console.log(data.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' '));