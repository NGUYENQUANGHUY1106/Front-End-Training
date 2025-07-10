// Arrow funcition

// function bình thường dicorayction function
function myFunction(log)
{
  console.log(log);
}  

myFunction('Quang Huy')
// expresstion function
const logger = function(log)
{
  console.log(log);
}  

logger('Quang Huy 123')

// arrow funtion
const logger2 = (log) =>
{
    console.log(log);
}
logger2('1234')

// ví dụ khác
 const sum = (a,b) =>
 {
    return a + b ;
 }
 console.log(sum(2,2));

 // cách viết khác 
 const result = (a,b)=> a-b ;
 console.log(result(6,1));

 const result2 = (a,b)=> ({a :a ,b :b}) ;
 console.log(result2(6,1));

 // arrow function không có context , không thể sử dunhj function constructor
 const courses = {
    name : 'PHP',
    name2:  'Docker',
    getName : function ()
    {
        return this.name // context
    },
    getName2 : () => this.name2
 }

 console.log(courses.getName());
 console.log(courses.getName2());