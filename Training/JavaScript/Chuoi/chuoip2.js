// length
var myString ='    Hoc JS tai F8 JS JS';
console.log(myString.length);
// find index
console.log(myString.indexOf('JS', 6 ));
console.log(myString.lastIndexOf('JS')); // tìm ký tự cuối cùng 
console.log(myString.search('JS'));
// CUT STRING
console.log(myString.slice(4,6)); // đây là cắt từ trái sang phải 
console.log(myString.slice(-3,-1));
// REPLACE 
console.log(myString.replace('JS', 'JavaScript')); // dùng cho 1 ký tự 
console.log(myString.replace(/JS/g, 'JavaScript')); // biểu thức chính quy để thay đổi toàn bộ những kí tự được chọn  
//Convert to upper case
console.log(myString.toUpperCase());
//Convert to lower case
console.log(myString.toLowerCase());
// Trim
console.log(myString.trim());
// split
var languages = 'JavaScript , PHP , RUBY';
console.log(languages.split(', '));
// Get a character by index
const myString2 = 'Quang Huy';
console.log(myString2.charAt(2));
console.log( typeof myString.charAt(10)); // khi kí tự được chọn không nằm trong chuổi đó
//  cách khác
 console.log(myString2[2]);
 console.log( typeof myString2[10]); // nếu truyền sẽ truyền về undefined
