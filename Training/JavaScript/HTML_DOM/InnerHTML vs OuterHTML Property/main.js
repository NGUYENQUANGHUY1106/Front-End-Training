var boxElement = document.querySelector('.box')
console.log(boxElement);
console.log(boxElement.innerHTML);
console.log(boxElement.outerHTML);


//inner HTML :lấy ra bên trong hai thuộc tính của Element Node
// khi sử dụng innerHTml thì nó sẽ ghi đè các elemnet có trong nó 
// boxElement.innerHTML = '<h1 title ="Heading">Heading</h1>'
// console.log(document.querySelector('h1').innerText);
// lấy nội dung ra html ra 
// outer HTML : lấy cả thẻ gọi đến .outerHTML ví dụ như boxElement.outerHTML thì sẽ lấy bắt đầu từ thằng box
// còn khi dùng outerHTML thì nó sẽ ghi đè chính nó 