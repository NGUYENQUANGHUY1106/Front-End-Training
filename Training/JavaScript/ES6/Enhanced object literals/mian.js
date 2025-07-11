// có thể làm 
/**
 * định nghĩa key value cho object
 * định nghĩa method cho object
 * định nghĩa key cho object dưới dạng biến 
 * 
 */
var name = 'PHP';
var price = 1000 ;
var courses = {
    name  ,
    price ,
    getName ()
    {
        return name
    }
}

console.log(courses);
console.log(courses.getName());


var fieldname = 'name123' ;
var fieldprice = 'price'

const courses2 = {
    [fieldname] : 'PHP',
    [fieldprice] : 1000
}
console.log(courses2);