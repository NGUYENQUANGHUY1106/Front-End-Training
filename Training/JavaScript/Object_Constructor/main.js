// OBJECT CONSTRUCTOR : XÂY DỰNG ĐỐI TƯỢNG


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