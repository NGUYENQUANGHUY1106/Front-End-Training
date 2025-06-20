
// Object constructor
function User(firstName, lastName, avatar) // mô tả thiết kế chứ không phải là đối tượng 
{
 this.firstName = firstName ;
 this.lastName = lastName;
 this.avatar = avatar ; // mô tả các thuộc tính đối tượng 

 this.getName = function()
 {
    // this. được gọi từ dối tượng khi gọi từ đối tượng nào thì nó sẽ là đối tượng đó 
    return `${this.firstName} ${this.lastName}`
 }
}
// đây mới là đối tượng 
var author = new User('Quang' , 'Huy' ,'ManU');
author.title = 'Chia sẻ dạo tại F8';
var user = new User('Thiên' , 'Trang' ,'ManU');
user.comment = ' Liệu có khóa nang cao không ad';

console.log(author);
console.log(user);
console.log(author.getName());
console.log(user.getName());

// Object prototype đối tượng nguyên mẩu  nguyên liệu tạo nên

User.prototype.className = 'F8';
User.prototype.getClassName = function ()
{
    return this.className;
    // this. khi mà sử dụng ở cái nào sẽ lấy thông tin tương  ứng của cái đó ra 
} // thêm vào đối tượng tạo ra 
// khi thêm vào nó sẽ nằm trong hàm proto 
console.log(user.className);
console.log(user);
console.log(author.getClassName());
console.log(user.getClassName());


// Object prototype đối tượng nguyên mẩu  nguyên liệu tạo nên

User.prototype.className = 'F8';
console.log(user);
User.prototype.getClassName = function ()
{
    return this.className ;
}
console.log(user.getClassName());