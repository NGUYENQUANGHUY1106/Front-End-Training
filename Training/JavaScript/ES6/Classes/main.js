// classes : là cách viết khác của constructor function
// function Courese (name,price)
// {
//     this.name = name ;
//     this.price = price
// }
 class Courese {
    constructor(name,price)
    {
        this.name = name;
        this.price = price ;
    }
    getName (){
       return this.name  ;

    }
    getPrice ()
    {
      return  this.price  ;
    }
 }

const phpCourses = new Courese('PHP',100);
const jsCourses = new Courese('JS',100);

console.log(phpCourses);
console.log(jsCourses);

console.log(phpCourses.getName());

// Bài tập
class Person {
    constructor (name,age)
   {
    this.name = name ;
    this.age = age ;
   }
}


// Expected results
const person = new Person('Long', 22);
console.log(`Tên: ${person.name}, tuổi: ${person.age}`);
// Output: 'Tên: Long, tuổi: 22'
