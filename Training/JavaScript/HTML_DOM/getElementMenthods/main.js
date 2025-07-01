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



///===============PHẦN 2 =============//
var test =  document.querySelector('.heading');

console.log(test);


var listItemNodes = 
    document.querySelectorAll('.box-1 li');


    console.log(listItemNodes);

// CÁCH HAI
// công việc 1 : sử dụng tới boxNode
// công việc 2 sử dinjg tới các li elements
// ;à con của `.box-1`
var boxNode = document.querySelector('.box-1');
console.log(boxNode);
console.log(boxNode.querySelectorAll('li'));
console.log(boxNode.getElementsByTagName('p'));


//// ==================== Phần 3 ====///////////////

// Ôn tập 
/**
 *1.getElementById 
 *2.getElementByClassName
 3.getElementByTagName
 4.querySelector
 5.querySelectorAll
  
 Chỉ có số 1, 4 là sẽ trả về Element

 6. HTML collection

 7.document.write : nếu file js nằm ở đâu thì vị trí của document.write sẽ nằm ở đó 
 nếu sử dụng document.write nay sau khi chạy xong nằm ở sau html  thì sẽ ghi đè lại tất cả trang web 
 */



