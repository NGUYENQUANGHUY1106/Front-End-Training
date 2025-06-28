/// FOR EACH()
 var courses = [
    'Javascript',
    'PHP',
    'Ruby'
 ];

 Array.prototype.forEach2 = function(cb)
 {
    for ( var index in this)
    {
        // this.hasOwnProperty(index); kiểm tra xem có element nào khác nằm trong proto hiển thị ra k 
        // console.log( index , this.hasOwnProperty(index) );
        if(this.hasOwnProperty(index))
        {
            console.log(index);
            cb(this[index], index , this)
        }
    }
 }
 var output  = courses.forEach2(function(course,index,array)
{
   console.log(course,index,array);
});

console.log(output);
// for each không chạy qua phẩn tử rổng 
/// tại sao array có thể gọi đến các push foreach tại vì
// các array constructor đã được định nghĩa trong prototype
// for in không chỉ duyệt qua các element nằm trong mảng 
// mà duyệt qua luôn cả những element, phương thức , thuộc tính  nằm trong proto khi định 
// nghĩa for each 2 nằm trong proto