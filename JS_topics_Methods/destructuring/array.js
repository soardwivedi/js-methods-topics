const arra = ['a', 'b', 'c', 'd', 'e', ['f', 'g']];

const [a, b, c, , , [f, g]] = arra;

console.log(a, b, g); // Output: a
