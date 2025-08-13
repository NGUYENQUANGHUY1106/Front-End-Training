/**
 * Destructuring, Rest : phân rả dùng cho object, array
 */
var array = ['Javascript','PHP','Ruby'];

var [a, ...rest] = array ;
console.log(a);
console.log(rest);
var course = {
    name : 'JS',
    price :1000,
    children : {
        name :'ReactJS'
    }
}
var {name : Name1,price, ...rest1} = course;

console.log(Name1,price,rest1);
var {name : parentName ,children : {name :childrenName}} = course;
console.log(parentName,childrenName);

function logger (...params)
{
   console.log(params);
   console.log(arguments);
}
console.log(logger(1,2,3,4,5,6,7,8));