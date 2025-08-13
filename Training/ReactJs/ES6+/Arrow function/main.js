const logger = (log) => {
  console.log(log);
};
logger("Hello ");

// Arrow function
const sum = (a,b) => a+b ;
console.log(sum(1,2));

const sum2 = (a,b) => ({a:a ,b:b});

console.log(sum2(2,4));

const course = {
    name : 'PHP',
    getName : function ()
    {
        return this.name ; // context
    }
};
console.log(course.getName());
// arrow funtion ko thể dùng với function constructor

const Course = function (name,price)
{
    this.name = name ;
    this.price = price;
}

const jsCourse = new Course ( 'PHP' ,1000);
console.log(jsCourse);

const triple = (x) => x *3 ;


// Expected results:
console.log(triple(2)) // Output: 6
console.log(triple(3)) // Output: 9
console.log(triple(5)) // Output: 15