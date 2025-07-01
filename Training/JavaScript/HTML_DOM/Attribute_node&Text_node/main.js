// Element
// Attribute : thuộc tính 
// Text

// DOM ATTRIBUTE 

var headingElement = document.querySelector('h1');

headingElement.title = "Heading";
headingElement.id = "Heading";
// headingElement.className =  "Heading";
// theo phuong thức 
headingElement.setAttribute('class','heading')
console.log(headingElement);

// lấy ra một value của một atribute
var heading_2 = document.querySelector('h2');
heading_2.setAttribute('title','title-test')
console.log(heading_2);

console.log(heading_2.getAttribute('class'));
console.log(heading_2.getAttribute('title'));
