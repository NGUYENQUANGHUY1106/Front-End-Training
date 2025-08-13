console.log(123);
// là một tính năng của ES6 (EcmaScript 2015) giúp việc khai báo và làm việc với các đối tượng trở nên ngắn gọn và dễ dàng hơn.
/**
 * định nghĩa key value cho object 
 * định nghĩa method
 * định nghĩa key cho object dưới dạng biến 
 */
var name = 'JS';
var price = 1000;

var coures = {
      name ,
      price ,
      getName   ()
      {
        return name 
      }
}
console.log(coures);
console.log(coures.getName());

var fieldName ='Name';
var fieldPrice = 'price';

const coures1 = {
    [fieldName] :'JS',
    [fieldPrice] : 1000
}
console.log(coures1);



function arrToObj(arr) {
   return arr.reduce ((acc,[key,value])=>
   {
    
     acc[key] = value ;
     
     return acc ;
     
   },{})
   
}

// Expected results:

const obj1 = arrToObj([
   ['name', 'Son Dang'], 
   ['age', 21], 
   ['address', 'Ha Noi']
])
console.log(obj1)
// Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

const obj2 = arrToObj([
   ['name', 'Duc Long'], 
   ['age', 18], 
   ['address', 'Ha Noi']
])
console.log(obj2)
// Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }

