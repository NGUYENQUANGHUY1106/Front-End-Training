//  callback ?

//  là hàm (function) được truyền qua đối số
//  khi gọi hàm khác 
//  1. là hàm 
//  2, được truyền qua đối số

function myFunction(number)
{0
    if(typeof number === 'function')
  number('Học Lập Trình ')
}

function myCallback(value)
{
    console.log('value: ', value);
}
myFunction(myCallback);
// bài tập

function sumCb(a, b) {
    return a + b ;
}

function subCb(a,b)
{
  return a- b ;
}
function multiCb (a,b)
{
   return a*b ;
}
function  divCb(a,b)
{
    return a/b ;
}
function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
console.log(caculate(1, 2, sumCb)); // Output: 3
console.log(caculate(1, 2, subCb)); // Output: -1
console.log(caculate(1, 2, multiCb)); // Output: 2
console.log(caculate(3, 1, divCb)); // Output: 3

// CALLBACK PHẦN 2 ;
// được gọi lại trong hàm nhận đối số ;

var courese = [
  'Java',
  'PHP',
  'Ruby'
];
Array.prototype.map2 = function(callback)
{
  var output = [] ;
    console.log(this);
    for(var i = 0 ; i < courese.length; i ++)
    {
      var result =  callback(this[i],i);
      output.push(result);
    }
    return output ;
}
courese.map2(function(course,index)
{
   console.log(index,course);
   return ` <h2>${course}</h2>`
});


var html = courese.map(function(course)
{
  console.log(course);
  return `<h2>${course}</h2>`
});
console.log(html.join(" "));


// forEach , reduce , find , filter chọn 1 trong những phương thức 
// foreach()

var array = [
  'Nguyen',
  'Quang',
  'Huy'
]
Array.prototype.forEach2 = function(callback)
{
  var output = [];
  var length = this.length;
  for(var i = 0 ; i < length ; i ++)
  {
     var result =  callback(this[i],i);
     output.push(result)
  }
}
var html1 = array.forEach2(function(course,index)
{
  console.log(course,index);
});
console.log(html.join(" "));
// bài tập


// Expected results
const numbers = [1, 2, 3];

Array.prototype.myMap = function(cb) {
  var output = [];
    var length = this.length ;
    for(var i = 0 ; i< length ; i++)
    {
     var result =  cb(this[i],i);
      output.push(result);
    }
    return output;

}
console.log(
  numbers.myMap(function(number)
  {
       return number * 2 ;
  }));
  // console.log(
  //   numbers.myMap(function(number,index)
  //   {
  //        return number * index ;
  //   }));
