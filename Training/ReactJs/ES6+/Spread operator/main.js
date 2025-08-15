/**
 
 */
function logger (...rest)
{
    console.log(rest);
}
logger(1,2,3,4)
/// rest được sủ dụng khi kết hợp với distructoring định nghĩa tham số
var array = ['JS','Ruby','PHP']
var array2 = ['ReactJS','Dart']
var array3 =[...array2,...array];
console.log(array3);

var object1 = {
    name : 'Javascript'
}

var object2 = {
    price : 1000 ,
}

var object3 = {
    ...object1,
    ...object2
}

console.log(object3);

var  course = ['Javascript','PHP','Ruby',];

function logger (a,b,c)
{
  console.log(a,b,c);
}
// khi truyền đối số 
console.log(...course);