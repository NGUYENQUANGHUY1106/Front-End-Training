// const h1 = document.querySelector('#heading');
// console.log( h1);

const h1 = document.createElement('h1');
const root = document.getElementById('root');
//appendChild : thêm thằng con vào 
h1.innerText = 'Hello';
root.appendChild(h1)
console.log(h1);