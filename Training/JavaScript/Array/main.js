var language = "JavaScript";
var languages2 = "PHP";
var languages3 = "Ruby";
//arry có thể chứa được tất cả các kiểu dữ liệu trong
// index , key
var language = [
  "Javascript", // phẩn tử của mảng
  "PHP",
  "Ruby",
  "Dart",
];
console.log(language);
console.log(Array.isArray(language));
console.log(Array.isArray([]));
console.log(language.length);
console.log(language[1]);
//========================///
/// CÁC CÁCH LÀM VIỆC VỚI ARRAY
// 1. to String chuyển kiểu dữ liệu array sang kiểu dữ liệu string
console.log( language.toString());
// 2. Join
console.log(language.join(' - '));
// 3.Pop : xóa đi phần tử ở cuối mảng và trả lại chính phẩn tử đã xoá 
// khi mảng đã trống ko còn element nào thì sẽ trả về undefine trả về mảng rổng 
console.log(language.pop());
console.log(language);
// 4.Push thêm một hoặc nhiều phần tử ở cuối mảng  và trả về độ dài của mảng 
console.log(language.push('Quang Huy','Thiên Trang'));
console.log(language);
console.log(language.length);
// 5.Shift xóa đi phẩn tử ở đầu mảng và trả về phẩn tử đã xóa 
console.log(language.shift());
console.log(language);
// 6.Unshift  thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài của mảng 
console.log(language.unshift('Bẽm'));
console.log(language);
// 7.Splicing có thể xóa cắt hoặ chèn phẩn tử mới vào mảng 
// XÓA 
language.splice(1, 1) // (1 bắt đầu xóa ở đâu,1 xóa bao nhiêu phẩn tử bắt đầu ở vị trí được chọn )
console.log(language);
// CHÈN
language.splice(1, 0 , 'Dart')  // chèn ở trước vị trí 1
console.log(language);
// 8.Concat nối được array 
var language2 = [
    'Kotlin',
    'Java'
]
console.log(language.concat(language2));
// 9.Slicing  cắt một vài element của mảng và trả về 
console.log(language.slice(-2,-1));
console.log(language);

function getLastElement (F8)
{
   return F8.slice(-1);
}




// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals);