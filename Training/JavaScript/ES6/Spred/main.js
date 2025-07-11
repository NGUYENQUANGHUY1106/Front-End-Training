//Spread : Giải  , truyền đối số 

var array = ['js','php','ruby'];
var array2 = ['reactjs','dart']

var array3 = [array.concat(array2)];
var array4 =[...array2,...array]
console.log(array4);
console.log(array3);


var object1 = {
    name : 'js'
}
var object2 ={
    price : 1000 
}

var object3 = {
    ...object1,
    ...object2
}

console.log(object3);

var array5 = ['js','php','ruby']
function log (a,...rest)
{
    for(var i = 0 ;i<rest.length ; i++)
    {
        console.log(rest[i]);
    }
}

log(...array5)

/// bài tập 

const person1 = {
    name: 'Son',
    age: 21
}

const person2 = {
    ...person1
}

// Expected results
console.log(person2.name) // Output: 'Son'
console.log(person2.age) // Output: 21
console.log(person1 === person2) // Output: false