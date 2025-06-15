var age = 18 ;
var PI  = 3.14 ;
// CÁCH 2 TẠO NUMBER
var otherNumber = new Number(9);
// khi khởi tạo một số bằng new numbers thì biến khơi tạo đó sẽ là object chứ không phải là number;
var result = 20 / 'ABC';
console.log(typeof result);
// Nan không phải một số đại diện cho kiểu số không hợp lệ 
// kiểm tra một biến có phải NaN không
  console.log(isNaN(result));

  // LÀM VIỆC VỚI NUMBER 
  // To String 
  console.log(age.toLocaleString());
  // To Fixed
  console.log(PI.toFixed());