/**
 add : thêm class vào elment 
 contanins : kiểm tra 1 class có nằm tỏng element đó hay không
 remove : xoa sbor class khỏi element
 toggle : đang có 1 element class khi gọi đến toggle sẽ xóa ngược lại không có sẽ thêm vào 
 */


// ELEMENT NODE

var boxElement = document.querySelector('.box');

console.log(boxElement.classList);
// trả về DOMTokenList giúp quản lý được class
// value sẽ trả về dạng chuổi chứa các atribute trong element
console.log(boxElement.classList);
// add

boxElement.classList.add('red')
// contains
console.log(boxElement.classList.contains('red'));

// remove
setTimeout(()=>
{
    boxElement.classList.remove('red');
},3000)

// toggle

setTimeout(()=>
{
    boxElement.classList.toggle('red')
},3000)