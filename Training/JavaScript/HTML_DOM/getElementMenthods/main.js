// Element
/**
 ID :
 class : \
 tagname
 CSS selector
 HTML collection
 */

// ID

// var headingNode  = document.getElementById('heading');
// console.log({
//     element : headingNode
// });


// classname không trả về như ID (object) mà tả về HTML collection giống mảng khác mảng ko có map reduce filter
var headingNode = document.getElementsByClassName('heading');
console.log(headingNode);


// tagname sẽ select qua tên thẻ tag h1

var headingNode = document.getElementsByTagName('h1');
console.log(headingNode);


// Css Selector

var headingNode = document.querySelector('.heading');
console.log(headingNode);

var heading_2 = document.querySelector('.box .heading-2');
console.log( heading_2);


var test = document.querySelector('.box .heading-2:first-child')
// muốn lấy ra phần thử thứ hai :nth-child(2)
console.log(test);

// queryseletorAll trả về nodeLisst
var  all = document.querySelectorAll('.box .heading-2');
console.log(all);

// HTML Collection : các thẻ form được quy vào , có thể lấy ra từng cái một theo [vị trí muốn lấy ]
// có key bằng chính tên với id 
// có thể đặt tên id bằng tên ví dụ như id= "testForm"
console.log(document.forms.testForm);
console.log(document.forms);
console.log(document.forms[2]);
console.log(document.forms['form-2']);

// document.anchor chỉ trả về khi có atribute bằng name 

console.log(document.anchors);

