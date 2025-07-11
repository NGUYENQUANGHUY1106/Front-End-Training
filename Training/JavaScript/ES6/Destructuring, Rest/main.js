// Destructuring phân rả dùng cho object và array 

var array = ['PHP','JS','Ruby'];

// var [a,b,c] =array;
var [a,...rest] = array
// var a = array[0];
// var b = array[1]
// var c = array[2]

console.log(a);
console.log(rest);


var courses = {
    name : 'Javascript',
    price : 1000,
    children :{
        name : 'RectJS'
    }
}


var {name,price} = courses;

console.log(name,price);

var {name, ...rest} = courses

var  {name : parentName, children : {name}} = courses
console.log(parentName);
console.log(name);
console.log(rest);

function logger (...rest)
{
    console.log(rest);
}
logger(1,2,3,4,5,6,6);
// rest lấy ra phần còn lại 


function log ({name,price,...rest})
{
   console.log(name);
   console.log(price);
   console.log(rest);
   
}

log({
    name : 'Javascript',
    price : '1000',
    description : 'content'
})