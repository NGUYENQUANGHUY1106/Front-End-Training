// 1.  Let, const
// 2.  Template Literals
// 3.  Multi-line String
// 4.  Arrow function
// 5.  Classes
// 6.  Default parameter values
// 7.  Destructuring
// 8.  Rest parameters
// 9.  Spread
// 10. Enhanced object literals
// 11. Tagged template literal
// 12. Modules


// so sánh
// Var : các biến  được khởi tạo trong block có thể truy cập ngoài block
// hosting : được hỏ trợ hosting và được nhấc lên đầu  nhấc các định nghĩa biến lên đầu 

// let, const : các biến được khởi tạo trong block không thể truy cập ra ngoài .
// hosting
// khác nhau : scope (phạm vi truy cập), hosting (đưa lên trên đầu)
// assignment : gán lại giá trị 
// var , let có thể gán lại giá trị 
// const không thể gán lại giá trị 
// có thể gán lại thuộc tính ví dụ 
// khi nào sử dụng const, var ,let
// không sử dụng thư viện code thuần : var
// bable dùng thư viện  : const, let
// khi định nghiac biến đó mà ko gán lại dùng const
// khi cần gán lại giá trị cho biến dùng let 
const a ={
    name : "php"
}
a.name = "133";

console.log(a.name);

// hosting : 

// 