// text 
//innerText , textContent


//setter

//geter

// sự khác nhau giữa innerText vaf textContent
/**
 inerTexxt: nội dung lấy ra sẽ giống như nội dung nhìn thấy trên trang web
 // textCOntent : nội dung lấy ra là nội dung được lấy trong DOM
 */
var headingElement = document.querySelector('h1');
console.log(headingElement.textContent);
console.log(headingElement.innerText);

// headingElement.innerText = 'New Heading';
// headingElement.textContent = 'New Heading';

//inerTexxt: nội dung lấy ra sẽ giống 
//như nội dung nhìn thấy trên trang web sẽ bỏ qua các thẻ HTML 

console.log(headingElement.innerText);

 // textCOntent : nội dung lấy ra là nội dung được lấy trong DOM
 // vẩn bỏ qua các thẻ HTML nhưng vẩn ghi nhận các khoảng cách tồn tại lấy nguyên bản textNode

 console.log(headingElement.textContent);

 headingElement.innerText = '<i>New Heading</i>'

 //inner text khi nhấn nút enter => br
 // text Contet